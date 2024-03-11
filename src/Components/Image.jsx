import { useEffect, useState } from "react";

export default function AddImage() {
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
    const [pokemonImages, setPokemonImages] = useState([]);

    // forms -> "front_default":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
    useEffect(() => {
        // // asynchronous function to fetch pokemon of the respective url
        const fetchPokemon = async (url) => {
            const res = await fetch(url);
            if (!res.ok) {
                throw new Error(`HTTP error! status: ${res.status}`);
            }
            return res.json();
        };
        // the pokemons.map((item) creates an array of promises by mapping each URL
        // to the result of the fetchPokemon function. Promise.all then waits for all these promises to settle

        Promise.all(pokemons.map((item) => fetchPokemon(item)))
        .then((res) => {
            const images = res.map(pokemon => pokemon.sprites.front_default);
            setPokemonImages(images);
        })
        .catch((err) => console.error(err));
    }, []);

    // handle image click
    const handleImageClick = () => {
        // shuffle array of image urls
        const shuffledImages = [...pokemonImages]
        for (let i = shuffledImages.length - 1; i > 0; i--) {
            const y = Math.floor(Math.random() * (i+1));
            [shuffledImages[i], shuffledImages[y]] = [shuffledImages[y], shuffledImages[i]]
        }
        // update state  with shuffled array
        setPokemonImages(shuffledImages);
    }
    return (
        <div id="images-container">
            {pokemonImages.map((imageUrl, index) => (
                <img key={index} src={imageUrl} alt={`Pokemon ${index + 1}`} onClick = {handleImageClick} style={{ cursor: "pointer" }} />
            ))}
        </div>
    );
}