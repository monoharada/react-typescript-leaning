import React, { useState } from 'react';



const Counter: React.FC<{}> = () => {
  const [value, setValue] = useState<number>(0)
  const incliment = () => {
    setValue((prevState) => prevState + 1)
  }
  const decliment = () => {
    setValue((prevState) => prevState - 1)
  }
  return (
    <div>
      <div>value:{value}</div>
      <button onClick={incliment}>+1</button>
      <button onClick={decliment}>-1</button>
    </div>
  )
}

export default Counter