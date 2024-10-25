import "./App.css"
import PokemonCard from "./Components/PokemonCard.tsx";
import { useState } from "react";
import Navbar from "./Components/Navbar.tsx";


function App () {
  
  const pokemonList = [
    {
        name: "bulbasaur",
id: 0,
        imgSrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
      },
      {
        name: "charmander",
        id:1,
        imgSrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
      },
      {
        name: "squirtle",
        id:2,
        imgSrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
      },
      {
        name: "pikachu",
        id:3,
        imgSrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
      },
      {
        name: "mew",
        id:4,
      },];

      const [pokemonIndex , setPokemonIndex] = useState (0);

  return (
<>
  <div>
  <Navbar pokemonIndex={pokemonIndex} setPokemonIndex={setPokemonIndex} pokemonList={pokemonList}  />
  <PokemonCard props={pokemonList[pokemonIndex]} />
  </div>
</>

)
}


export default App;
