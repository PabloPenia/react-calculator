export const run = {
  isOp: /[x/+-]/,
  calculate: function (arr, value) {
    arr = [...arr]
    console.log('before parsing: ', arr)
    this.parseData(arr, value)
    console.log('Parsed: ', arr)
    this.evalLastInput(arr)
    //.filter(item => item !== '+')
    return console.log('Evaluated: ', arr)
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
        arr = [...arr]
    }
    return this
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
    arr = [...arr, value]
    console.log('parsing... ', arr)
    return arr
  },
}

/* CODE TO test REFACTOR */
//Handling precedence and calculating
// calculate(tempResult)
// function calculate(arr) {
//   let index = arr.findIndex(item => isNaN(item))
//   if (index > 0) {
//     let prev = index - 1
//     let post = index + 1
//     let calc
//     arr[index] === 'x' ? (calc = prev * post) : (calc = prev / post)
//     switch (index) {
//       case 1:
//         tempResult = [calc, ...tempResult.slice(3)]
//         calculate(tempResult)
//         break
//       case 2:
//         tempResult = [tempResult[0], calc, ...tempResult.slice(4)]
//         calculate(tempResult)
//         break
//       default:
//         let reduced = tempResult.slice(0, prev).reduce((a, b) => a + b)
//         tempResult = [reduced, calc, ...tempResult.slice(4)]
//         calculate(tempResult)
//     }
//   } else {
//     // setCalculating(false)
//     console.log(tempResult)
//   }
// }
