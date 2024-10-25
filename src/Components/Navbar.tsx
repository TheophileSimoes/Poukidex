interface Pokemon {
    imgSrc?: string;
    name: string;
    id : number;
}

interface NavBarProps {

  pokemonIndex : number;
  setPokemonIndex: (index: number) => void;
  pokemonList: Pokemon[];

}

function Navbar ({pokemonIndex, setPokemonIndex,pokemonList}: NavBarProps){


return (
    <nav>
 {pokemonList.map((Pokemon)=> (
<button 
type="button" 
onClick={() =>setPokemonIndex(P okemon.id)}>
{Pokemon.name}
</button>
 ))}
  </nav>
);
};


export default Navbar;