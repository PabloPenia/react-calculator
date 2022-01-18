import { useState } from 'react'
import { run } from '../js/functions'
import Display from './Display'
import Pad from './Pad'
function App() {
  const [currentVal, setCurrentVal] = useState('0')
  const [formula, setFormula] = useState([])
  const isOp = run.isOp
  const make = {
    clear: () => {
      setFormula([])
      setCurrentVal('0')
    },
    clearLast: () => {
      if (currentVal.length === 1) {
        if (formula.length === 0) {
          return make.clear()
        }
        setCurrentVal(formula.at(-1).toString())
        setFormula(formula.slice(0, -1))
      } else {
        setCurrentVal(currentVal.slice(0, -1))
      }
    },
    decimal: () => {
      if (currentVal.includes('.')) return
      if (isOp.test(currentVal)) {
        setFormula(run.parseData(formula, currentVal))
        return setCurrentVal('0.')
      } else {
        return setCurrentVal(currentVal + '.')
      }
    },
    result: () => {
      // code after refactor functions.js
      // setCurrentVal(run.calculate(formula, currentVal))
      // setFormula('')
    },
    num: e => {
      const value = e.target.value
      if (currentVal === '0') return setCurrentVal(value)
      if (isOp.test(currentVal)) {
        setFormula(run.parseData(formula, currentVal))
        setCurrentVal(value)
      } else {
        setCurrentVal(currentVal + value)
      }
    },
    op: e => {
      const op = e.target.value
      if (op === '-') {
        if (currentVal === '-') {
          return setCurrentVal('+')
        } else {
          setFormula(run.parseData(formula, currentVal))
          return setCurrentVal(op)
        }
      }
      if (isOp.test(currentVal)) {
        return setCurrentVal(op)
      }
      if (currentVal !== '0') {
        setFormula(run.parseData(formula, currentVal))
        setCurrentVal(op)
      }
    },
  }
  return (
    <main>
      <Display current={currentVal} formula={formula} />
      <Pad handler={make} />
    </main>
  )
}

export default App
