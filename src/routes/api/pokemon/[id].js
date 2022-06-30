export async function get({params}) {
    const url = `https://pokeapi.co/api/v2/pokemon/${params.id}`;
    const res = await fetch(url);
    const pokemon = await res.json();

    return {
        stauts: 200,
        body: pokemon,
    }
}