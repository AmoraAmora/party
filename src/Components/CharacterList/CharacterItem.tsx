import React from 'react';

interface Props {
    name: string;
    image: string;
}

function CharacterItem( props:Props ){

    return (
      <div>
        {<div className="Character">
          <img src={props.image} alt={props.name} />
          <button /></div>}
      </div>
    )
  }

export default CharacterItem