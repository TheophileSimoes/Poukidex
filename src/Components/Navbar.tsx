interface Pokemon {
    imgSrc?: string;
    name: string;
}

interface NavBarProps {

  pokemonIndex : number;
  setPokemonIndex: (index: number) => void;
  pokemonList: Pokemon[];

}

function Navbar ({pokemonIndex, setPokemonIndex,pokemonList}: NavBarProps){


return (

    <nav>
 
{pokemonIndex < pokemonList.length - 1 && (
    <button type="button" onClick={() => setPokemonIndex(pokemonIndex + 1)}>Suivant</button>
)}

{pokemonIndex > 0 && (
    <button type ="button" onClick={() => setPokemonIndex(pokemonIndex - 1)}>Précédent</button>
) }

  </nav>
)
}


export default Navbar;