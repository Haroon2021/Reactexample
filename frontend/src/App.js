import React, { useState, useEffect } from 'react'
import "./App.css";

function App() {

  const getPokemonList = async () => {

    const [pokemonList, setPokemonList] = 
    useState([]);

    let response = await fetch('https://pokeapi.co/api/v2/pokemon');
    let  data = await response.json()
    return data.results
  }

  useEffect(() => {
    getPokemonList();
    }, []);
  return (
    <div className="App">
     
    </div>
  );
}

export default App;
