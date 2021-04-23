import React from 'react'
import { ItemProps } from './interfaces'

function CharacterItem(props: ItemProps) {
  const { image, name, onDelet } = props
  return (
      <div className="Character">
          <img src={image} alt={name} />
          <button type="button" onClick={onDelet(name)}>x</button>
      </div>
  )
}

export default CharacterItem
