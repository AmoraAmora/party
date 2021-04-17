import React, { useState } from 'react'
import { FormComponentProps } from './interfaces'

const FormComponent: React.FC<FormComponentProps> = ({ onChangeTitle }) => {
  const [title, setTitle] = useState('')

  const changeHandler = (event:React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value)
  }

  const KeyPressHandler = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      onChangeTitle(title)
      setTitle('')
    }
  }

  return (
      <form>
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
