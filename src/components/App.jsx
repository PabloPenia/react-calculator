import '../sass/App.sass'
import { useState } from 'react'
import run from '../js'
import Display from './Display'
import Pad from './Pad'
function App() {
  const [currentVal, setCurrentVal] = useState('0')
  const [formula, setFormula] = useState([])
  const initial = currentVal === '0' && formula.length === 0
  const isOp = run.isOp
  const isOpOrMinus = run.isOpOrMinus
  const make = {
    reset: value => setCurrentVal(value),
    result: (prevVal, lastVal) => {
      setCurrentVal(run.calculate(prevVal, lastVal))
      setFormula([])
    },
    update: (prevVal, nextVal) => {
      setCurrentVal(nextVal)
      Array.isArray(prevVal) ? setFormula(prevVal) : setFormula(run.parseData(formula, prevVal))
    },
  }
  const handlers = {
    addDecimal: () => {
      if (currentVal.includes('.')) return
      if (currentVal === '-') return make.reset('-0.')
      isOp.test(currentVal) ? make.update(currentVal, '0.') : make.reset(currentVal + '.')
    },
    addMinus: () => {
      if (currentVal === '-' && (formula.at(-1) === '-' || formula.length === 0)) return
      if (isOpOrMinus.test(currentVal) && isOpOrMinus.test(formula.at(-1))) return make.reset('-')
      currentVal === '0' ? make.reset('-') : make.update(currentVal, '-')
    },
    addNum: e => {
      const value = e.target.value
      if (initial || typeof currentVal === 'number') return make.reset(value)
      if (isOpOrMinus.test(formula.at(-1)) && isOp.test(currentVal)) return make.reset(value)
      isOp.test(currentVal) ? make.update(currentVal, value) : make.reset(currentVal + value)
    },
    addOp: e => {
      const op = e.target.value
      if (isOpOrMinus.test(formula.at(-1)) && isOpOrMinus.test(currentVal)) return make.reset(op)
      switch (op) {
        case '+':
          if (currentVal === '+' && (formula.at(-1) === '+' || formula.length === 0)) return
          initial ? make.reset(op) : make.update(currentVal, op)
          break
        default:
          if (initial) return
          if (isOp.test(currentVal) && currentVal !== '+') {
            make.reset(op)
          } else {
            make.update(currentVal, op)
          }
      }
    },
    addResult: () => make.result(formula, currentVal),
    clear: () => make.update([], '0'),
    clearLast: () => {
      // TODO: refactor this
      if (typeof currentVal === 'number') return handlers.clear()
      if (currentVal.length === 1) {
        if (formula.length === 0) {
          return handlers.clear()
        }
        return make.update(formula.slice(0, -1), formula.at(-1).toString())
      } else {
        return make.reset(currentVal.slice(0, -1))
      }
    },
  }
  return (
    <>
      <main>
        <div>
          <Display current={currentVal} formula={formula} />
          <Pad handler={handlers} />
        </div>
      </main>
      <footer>
        <a href="https://reactjs.org" target="_blank" rel="noreferrer">
          React
        </a>{' '}
        Calculator by{' '}
        <a href="https://linkedin.com/in/PabloPenia" target="_blank" rel="noreferrer">
          Pablo Peña
        </a>
        . | Get the{' '}
        <a href="https://github.com/PabloPenia/react-calculator.git" target="_blank" rel="noreferrer">
          Source Code
        </a>
      </footer>
    </>
  )
}

export default App
