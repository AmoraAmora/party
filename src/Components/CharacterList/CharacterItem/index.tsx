import React, { useState } from 'react'
import Button from '@material-ui/core/Button'

import { useRickAndMorty } from '../../RickAndMortyProvider'
import { ItemProps } from './interfaces'
import './style.css'

function CharacterItem(props: ItemProps) {
  const { onChangePicture } = useRickAndMorty()

  const [isDelit, setIsDelit] = useState(false)

  const {
    image, name, id, onDelete,
  } = props

  const handleClick = (i:number) => {
    onDelete(i)
    setIsDelit(true)
  }

  const onPictureClickListener = (charName:string, charImg: string) => {
    onChangePicture(charName, charImg)
  }

  if (isDelit) return (null)

  return (
      <div className="Character">
          <Button
            className="CharacterButton"
            type="button"
            onClick={() => onPictureClickListener(name, image)}
          >
              <img className="CharacterImage" src={image} alt={name} />
          </Button>
          <button
            className="DeleteCharacterButton"
            type="button"
            onClick={() => handleClick(id)}
          >х
          </button>
      </div>
  )
}

export default CharacterItem
