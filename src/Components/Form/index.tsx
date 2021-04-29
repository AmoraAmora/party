import React, { useState } from 'react'
import { useTitle } from '../../context'

const FormComponent: React.FC = () => {
  const [title, setTitle] = useState('')

  const { onChangeTitle } = useTitle()

  const changeHandler = (event:React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value)
  }

  const KeyPressHandler = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      onChangeTitle(title)
      setTitle('')
    }
  }

  const handlerSubmit = (event: React.FormEvent) => {
    event.preventDefault()
  }

  return (
      <form onSubmit={handlerSubmit}>
          <input
            value={title}
            onChange={changeHandler}
            type="text"
            onKeyPress={KeyPressHandler}
          />
      </form>
  )
}
export default FormComponent
