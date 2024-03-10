import { useEffect } from "react";

export default function Image() {
    // pokemon url images
    const pokemons = [
        'https://pokeapi.co/api/v2/pokemon-form/382/',
        'https://pokeapi.co/api/v2/pokemon-form/384/',
        'https://pokeapi.co/api/v2/pokemon-form/4/',
        'https://pokeapi.co/api/v2/pokemon-form/1/',
        'https://pokeapi.co/api/v2/pokemon-form/7/',
        'https://pokeapi.co/api/v2/pokemon-form/129/',
        'https://pokeapi.co/api/v2/pokemon-form/10/',
        'https://pokeapi.co/api/v2/pokemon-form/19/',
        'https://pokeapi.co/api/v2/pokemon-form/25/',
        'https://pokeapi.co/api/v2/pokemon-form/35/',
        'https://pokeapi.co/api/v2/pokemon-form/37/',
        'https://pokeapi.co/api/v2/pokemon-form/43/'
    ]
    
    // forms -> "front_default":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
    useEffect(() => {
        fetch(pokemons[0]).then(function(response) {
        return response.json();
    }) 
    }, );
    
    
}