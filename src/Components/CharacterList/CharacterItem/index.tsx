import Button from '@material-ui/core/Button'
import React from 'react'
import { useRickAndMorty } from '../../RickAndMortyProvider'
import { ItemProps } from './interfaces'
import './style.css'

function CharacterItem(props: ItemProps) {
  const { onChangePicture } = useRickAndMorty()

  const {
    image, name, id, onDelete,
  } = props

  const handleClick = () => {
    onDelete(id)
  }

  const onPictureClickListener = () => {
    onChangePicture(image)
  }

  return (
      <div className="Character">
          <Button
            className="CharacterButton"
            type="button"
            onClick={onPictureClickListener}
          >
              <img className="CharacterImage" src={image} alt={name} />
          </Button>
          <button
            className="DeleteCharacterButton"
            type="button"
            onClick={handleClick}
          >
              x
          </button>
      </div>
  )
}

export default CharacterItem
