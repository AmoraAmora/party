import React from 'react'
import { ItemProps } from './interfaces'

function CharacterItem(props: ItemProps) {
  const {
    image, name, id, onDelete,
  } = props

  const handleClick = () => {
    onDelete(id)
  }

  return (
      <div className="Character">
          <img src={image} alt={name} />
          <button type="button" onClick={handleClick}>x</button>
      </div>
  )
}

export default CharacterItem
