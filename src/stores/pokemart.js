import { writable } from "svelte/store";

export const pokemart = writable([]);

/// @param {number} num Number of pokemons to obtain.
export const fetchPokemon = async (num) => {
    const url = `https://pokeapi.co/api/v2/pokemon?limit=${num}`;
    const res = await fetch(url);
    const data = await res.json();
    const pokemons = data.results.map((pokemon, index) => {
        return {
            name: pokemon.name,
            url: pokemon.url,
            id: index + 1,
            image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`,
        }
    });

    pokemart.set(pokemons);
}

fetchPokemon(150);