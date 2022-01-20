const Pad = ({ handler: { clear, clearLast, addDecimal, addNum, addOp, addMinus, addResult } }) => {
  return (
    <div id="pad">
      <button id="clear" value="AC" onClick={clear}>
        AC
      </button>
      <button id="clearLast" value="<" onClick={clearLast}>
        &#11013;
      </button>
      <button id="divide" value="/" onClick={addOp}>
        /
      </button>
      <button id="seven" value="7" onClick={addNum}>
        7
      </button>
      <button id="eight" value="8" onClick={addNum}>
        8
      </button>
      <button id="nine" value="9" onClick={addNum}>
        9
      </button>
      <button id="multiply" value="x" onClick={addOp}>
        x
      </button>
      <button id="four" value="4" onClick={addNum}>
        4
      </button>
      <button id="five" value="5" onClick={addNum}>
        5
      </button>
      <button id="six" value="6" onClick={addNum}>
        6
      </button>
      <button id="subtract" value="-" onClick={addMinus}>
        -
      </button>
      <button id="one" value="1" onClick={addNum}>
        1
      </button>
      <button id="two" value="2" onClick={addNum}>
        2
      </button>
      <button id="three" value="3" onClick={addNum}>
        3
      </button>
      <button id="add" value="+" onClick={addOp}>
        +
      </button>
      <button id="zero" value="0" onClick={addNum}>
        0
      </button>
      <button id="decimal" value="." onClick={addDecimal}>
        .
      </button>
      <button id="equals" value="=" onClick={addResult}>
        =
      </button>
    </div>
  )
}

export default Pad
