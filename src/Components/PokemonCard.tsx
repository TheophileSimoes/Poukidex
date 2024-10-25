interface Pokemon {
  props:{
    imgSrc?: string;
    name: string;
  };
}


function PokemonCard ({props} : Pokemon) {



   
    
    return (
    <>
    <figure>
       {props.imgSrc ? (<img src = {props.imgSrc} alt ={props.name}/>) : (<p>???</p>) }
    </figure>
    <figcaption>
      {props.name  ? (<p>{props.name}</p>) : (<p>???</p> )}
    </figcaption></>)
    }

 
    export default PokemonCard;