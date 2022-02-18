import React, { Component } from "react";

export default class PokemonName extends Component {
  render () {
    const { id, name, type, averageWeight, image} = this.props.pokemon;
        return (
          <div className="pokemon-card">
            <div>Id: {id}</div>
            <div>Name: {name}</div>
            <div>Tipo: {type}</div>
            <div>Peso: {averageWeight.value} {averageWeight.measurementUnit}</div>
            <div className="pokemon-image">
              <img src={image} alt="Imagem do pokemon nomeado." />
            </div>
          </div>
    )
  }
}