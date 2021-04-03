import React from "react";
import { ItemProps } from "./interfases";

function CharacterItem(props: ItemProps) {
  return (
    <div>
      {
        <div className="Character">
          <img src={props.image} alt={props.name} />
          <button />
        </div>
      }
    </div>
  );
}


export default CharacterItem;
