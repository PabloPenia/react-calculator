const Display = ({ current, formula }) => {
  return (
    <div id="display">
      <p>{current}</p>
      <p>
        {formula} <span>{formula.length > 0 && current}</span>
      </p>
    </div>
  )
}

export default Display
