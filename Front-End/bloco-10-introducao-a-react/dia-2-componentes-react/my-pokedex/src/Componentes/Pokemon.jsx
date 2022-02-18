import React, { Component } from "react";
import PokemonName from "./Pokedex";
import Pokemons from "../data";

export default class Pokedex extends Component {
  render () {
    return (
      Pokemons.map((element) => <PokemonName key={element.id} pokemon={element}/>)
    )
  }
}