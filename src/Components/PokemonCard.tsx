function PokemonCard () {

    let pokemon = pokemonList[0];
   
    
    return <><figure>
       {pokemon.imgSrc ? (<img src = {pokemon.imgSrc} alt ={pokemon.image}/>) : (<p>???</p>) } 
    </figure><figcaption>{ pokemon.name  ? (<p>{pokemon.name}</p>) : (<p>???</p> )}</figcaption></>
    
    
    }
    const pokemonList = [
        {
          name: "bulbasaur",
          imgSrc:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
        },
        {
          name: "mew",
        },
      ];

    export default PokemonCard;