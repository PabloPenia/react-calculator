export const run = {
  isOp: /[x/+-]/,
  isPrec: /[x/]/,
  calculate: function (arr, value) {
    arr = [...arr]
    arr = this.parseData(arr, value)
    arr = this.evalLastInput(arr).filter(item => item !== '+')
    arr = this.makeCalc(arr)
    return parseFloat(arr.toFixed(4))
  },
  evalLastInput: function (arr) {
    switch (arr.at(-1)) {
      case '+':
      case '-':
        arr = [...arr, 0]
        break
      case 'x':
      case '/':
        arr = [...arr, 1]
        break
      default:
        break
    }
    return arr
  },
  makeCalc: function (arr) {
    // find index of first sign x or /
    let index = arr.findIndex(item => this.isPrec.test(item))
    if (index > 0) {
      // index 0 is not possible for make.op logic in App.jsx, if is -1 there's no precedence to calculate.
      let prev = index - 1
      let post = index + 1
      let calc
      arr[index] === 'x' ? (calc = arr[prev] * arr[post]) : (calc = arr[prev] / arr[post])
      switch (index) {
        // recursive switch call itself on every pass:
        // case 1 and default should run no more than once
        // case 2 in every pass until there's no more precedence
        case 1:
          arr = [calc, ...arr.slice(3)]
          return this.makeCalc(arr)
        case 2:
          arr = [arr[0], calc, ...arr.slice(4)]
          return this.makeCalc(arr)
        default:
          let reduced = arr.slice(0, prev).reduce((a, b) => a + b)
          arr = [reduced, calc, ...arr.slice(post + 1)]
          return this.makeCalc(arr)
      }
    } else {
      // no more precedence getting the last result....
      arr = arr.reduce((a, b) => a + b)
    }
    return arr
  },
  parseData: function (arr, value) {
    //numbers
    if (!this.isOp.test(value)) {
      value = parseFloat(parseFloat(value).toFixed(4))
      if (arr.at(-1) === '-') {
        value = -value
        arr = [...arr.slice(0, -1)]
      }
    }
    //return signs or numbers already parsed
    return (arr = [...arr, value])
  },
}
