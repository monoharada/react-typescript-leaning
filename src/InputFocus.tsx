import React, { useRef } from 'react'

interface InputFocusProps {
  text?: string
}
const InputFocus: React.FC<InputFocusProps> = ({ text }) => {
  const ref = useRef<HTMLInputElement>(null!)
  const focusInput = () => {
    ref.current.focus()
    ref.current.value = 'hogehoge'

  }

  return (
    <>
      <input ref={ref} type="text" />
      <button onClick={focusInput}>{text}</button>
    </>
  )
}

InputFocus.defaultProps = {
  text: 'click Me!!!!'
}

export default InputFocus