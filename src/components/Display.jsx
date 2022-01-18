const Display = ({ current, formula }) => {
  return (
    <div id="display">
      <p>{current}</p>
      <p>
        {formula}{' '}
        <span style={{ color: 'red' }}>{current}</span>
      </p>
    </div>
  )
}

export default Display
