const Pad = ({ handler: { clear, clearLast, decimal, num, op, result } }) => {
  return (
    <div id="pad">
      <button id="clear" value="AC" onClick={clear}>
        AC
      </button>
      <button id="clearLast" value="<" onClick={clearLast}>
        &#11013;
      </button>
      <button id="divide" value="/" onClick={op}>
        /
      </button>
      <button id="seven" value="7" onClick={num}>
        7
      </button>
      <button id="eight" value="8" onClick={num}>
        8
      </button>
      <button id="nine" value="9" onClick={num}>
        9
      </button>
      <button id="multiply" value="x" onClick={op}>
        x
      </button>
      <button id="four" value="4" onClick={num}>
        4
      </button>
      <button id="five" value="5" onClick={num}>
        5
      </button>
      <button id="six" value="6" onClick={num}>
        6
      </button>
      <button id="subtract" value="-" onClick={op}>
        -
      </button>
      <button id="one" value="1" onClick={num}>
        1
      </button>
      <button id="two" value="2" onClick={num}>
        2
      </button>
      <button id="three" value="3" onClick={num}>
        3
      </button>
      <button id="add" value="+" onClick={op}>
        +
      </button>
      <button id="zero" value="0" onClick={num}>
        0
      </button>
      <button id="decimal" value="." onClick={decimal}>
        .
      </button>
      <button id="equals" value="=" onClick={result}>
        =
      </button>
    </div>
  )
}

export default Pad
