import React from 'react'
import { useRickAndMorty } from '../../../CharacterContest'
import { ItemProps } from './interfaces'

/* eslint-disable */

function CharacterItem(props: ItemProps) {
  const { onChangePicture } = useRickAndMorty()

  const {
    image, name, id, onDelete,
  } = props

  const handleClick = () => {
    onDelete(id)
  }

  const handleMouseDown = () => {
    onChangePicture(image)
  }

  return (
      <div className="Character">
          <img src={image} alt={name} onMouseDown={handleMouseDown} />
          <button type="button" onClick={handleClick}>x</button>
      </div>
  )
}

export default CharacterItem
