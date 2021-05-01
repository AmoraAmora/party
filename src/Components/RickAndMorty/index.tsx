import React from 'react'
import { useRickAndMorty } from '../../CharacterContest'

function RickAndMorty() {
  const { Rick, Morty } = useRickAndMorty()
  return (
      <div className="RickAndMorty">
          <div className="Rick"><img alt="Rick Sanchez" src={Rick} /></div>
          <div className="Morty"><img alt="Morty Smith" src={Morty} /></div>
      </div>
  )
}

export default RickAndMorty
