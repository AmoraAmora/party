import React from 'react'
import { ItemProps } from './interfaces'

function CharacterItem(props: ItemProps) {
  const { image, name } = props
  return (
      <>
          <div className="Character">
              <img src={image} alt={name} />
              <button type="button">x</button>
          </div>
      </>
  )
}

export default CharacterItem
