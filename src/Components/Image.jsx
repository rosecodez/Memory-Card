import React, { useEffect, useState } from "react";
import Scoreboard from "./Scoreboard"; 

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
];

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

export default function AddImage() {
  const [pokemonImages, setPokemonImages] = useState([]);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [clickedImages, setClickedImages] = useState([]);

  useEffect(() => {
    const fetchPokemon = async (url) => {
      const res = await fetch(url);
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      return res.json();
    };

    Promise.all(pokemons.map((item) => fetchPokemon(item)))
      .then((res) => {
        const images = res.map((pokemon) => pokemon.sprites.front_default);
        setPokemonImages(images);
      })
      .catch((err) => console.error(err));
  }, []);

    // handle click image
    const handleImageClick = (imageUrl) => {
        const shuffledImages = shuffleArray([...pokemonImages]);
        setPokemonImages(shuffledImages);

        if (clickedImages.includes(imageUrl)) {
            // reset the score and clickedImages if clicked on the same image
            setScore(0);
            setClickedImages([]);
        } else {
            // increment the score and update clickedImages
            setScore(score + 1);
            setClickedImages((prevClickedImages) => [...prevClickedImages, imageUrl]);
            // update best score if the current score exceeds it
            setBestScore((prevBestScore) => Math.max(score + 1, prevBestScore));
        }
    };

  return (
    <div id="game-container">
      <Scoreboard score={score} bestScore={bestScore} />
      <div id="images-container">
        {pokemonImages.map((imageUrl, index) => (
          <img
            key={index}
            src={imageUrl}
            alt={`Pokemon ${index + 1}`}
            onClick={() => handleImageClick(imageUrl)}
            style={{ cursor: "pointer" }}
          />
        ))}
      </div>
    </div>
  );
}
