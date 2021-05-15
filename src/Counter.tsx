import React, { useEffect, useState, useRef } from 'react';


const Counter: React.FC<{}> = () => {
  const [value, setValue] = useState<number>(0)
  const incliment = () => {
    setValue((prevState) => prevState + 1)
  }
  const decliment = () => {
    setValue((prevState) => prevState - 1)
  }
  const renderTimes = useRef<number>(0)
  useEffect(() => {
    ++renderTimes.current
  })
  return (
    <div>
      <div>value:{value}</div>
      <button onClick={incliment}>+1</button>
      <button onClick={decliment}>-1</button>
      <div>this component was re-rendered {renderTimes.current} times</div>
    </div>
  )
}

export default Counter