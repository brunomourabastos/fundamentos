import React from "react";
import data from "../data"


class Components extends React.Component {
  render() {
    return (
      data.map((pokemon) => (
        <div className="each-pokemon">
          <div className="pokemon-name">
          {pokemon.name}
          </div>
          <div className="pokemon-type">
          {pokemon.type}
          </div>
          <div className="pokemon-weight">
          Average weight: {pokemon.averageWeight.value} {pokemon.averageWeight.measurementUnit}
          </div>
          <div className="pokemon-image">
            <img src={pokemon.image} alt="Imagem de cada pokemon de acordo com o nome"></img>
          </div>
        </div>

      ))
    )
  }
}

export default Components;