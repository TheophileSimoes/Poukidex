import "./App.css"
import PokemonCard from "./Components/PokemonCard.tsx";
import { useState } from "react";



function App () {
  const [pokemonIndex , setIndex] = useState (0);
console.log(pokemonIndex);



  return (
<>
  <div>
    {pokemonIndex < pokemonList.length - 1 && (

      <button onClick={() => setIndex(pokemonIndex + 1)}>Suivant</button>
    )}

    {pokemonIndex > 0 && (
      <button onClick={() => setIndex(pokemonIndex - 1)}>Précédent</button>
    ) }
  <PokemonCard props ={pokemonList[pokemonIndex]} />
  </div>
</>

)
}

const pokemonList = [
{
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "charmander",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
  },
  {
    name: "squirtle",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
  },
  {
    name: "pikachu",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
  },
  {
    name: "mew",
  },
];




export default App;
