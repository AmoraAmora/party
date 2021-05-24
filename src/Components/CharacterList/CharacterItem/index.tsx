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

  const handleClick = (i:number) => {
    onDelete(i)
  }

  const onPictureClickListener = (img:string) => {
    onChangePicture(img)
  }

  return (
      <div className="Character">
          <Button
            className="CharacterButton"
            type="button"
            onClick={() => onPictureClickListener(image)}
          >
              <img className="CharacterImage" src={image} alt={name} />
          </Button>
          <button
            className="DeleteCharacterButton"
            type="button"
            onClick={() => handleClick(id)}
          >
              x
          </button>
      </div>
  )
}

export default CharacterItem
