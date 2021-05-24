import React from 'react'
import { useRickAndMorty } from '../RickAndMortyProvider'
import './style.css'

function RickAndMorty() {
  const { Rick, Morty } = useRickAndMorty()
  return (
      <div className="RickAndMorty">
          <h1 className="Party">PARTY</h1>
          <div className="RickAndMorty2">
              <div className="RickAndMorty3" style={{ backgroundImage: Rick }}><h1 className="Rick">RICK</h1></div>
              <div className="RickAndMorty3" style={{ backgroundImage: Morty }}><h1 className="Morty">MORTY</h1></div>
          </div>
      </div>
  )
}

export default RickAndMorty
