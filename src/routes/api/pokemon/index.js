export async function get({params}) {
    const url = `https://pokeapi.co/api/v2/pokemon?limit=150`;
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

    return {
        stauts: 200,
        body: pokemons,
    }
}