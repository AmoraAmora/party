import React, { useState } from 'react'
import { useTitle } from '../TitleProvider'
import './style.css'

const FormComponent: React.FC = () => {
  const [title, setTitle] = useState('')

  const { onChangeTitle } = useTitle()

  const changeHandler = (event:React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value)
    onChangeTitle(title)
  }

  const handlerSubmit = (event: React.FormEvent) => {
    event.preventDefault()
  }

  return (
      <form onSubmit={handlerSubmit}>
          <input
            className="Search"
            value={title}
            onChange={changeHandler}
          />
      </form>
  )
}

export default FormComponent
