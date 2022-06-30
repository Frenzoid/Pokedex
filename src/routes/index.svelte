<script context="module">
    // This return passes the value to the script below.
    // This script is ran when page is loaded.
    export async function load() {
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
        return {props: {pokemons}};
    }
</script>

<script>
    // import { pokemart } from "../stores/pokemart";
    import { fly } from "svelte/transition";
    import PokeCard from "../components/pokeCard.svelte";
    export let pokemons;

    let search = "";
    let filteredPokemons = [];

    $ : {
        if (filteredPokemons) {
            filteredPokemons = pokemons.filter(pokemon => pokemon.name.includes(search.toLowerCase()));
        } else {
            filteredPokemons = [...pokemons];
        }
    }

</script>

<svelte:head>
    <title>Pokedex</title>
</svelte:head>

<div transition:fly="{{ y: 200, duration: 200 }}">
    <h1 class="text-2xl text-center my-4 uppercase">Pokedex</h1>

    <input class="w-full rounded-md text-lg p-4 border-2 border-gray-200 mb-4"
    type="text" placeholder="Search Pokemon" bind:value={search}>

    <div class="grid gap-4 md:grid-cols-2 grid-cols-1" >
        {#each filteredPokemons as pokemon }
            <PokeCard {...pokemon} />
        {/each}
    </div>
</div>