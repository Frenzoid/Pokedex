<script context="module">
    // This return passes the value to the script below.
    // This script is ran when page is loaded.
    export async function load({params}) {
        const url = `https://pokeapi.co/api/v2/pokemon/${params.id}`;
        const res = await fetch(url);
        const pokemon = await res.json();
        return {props: {pokemon}};
    }
</script>

<script>
    import { fly } from "svelte/transition";
    export let pokemon;
    const type = pokemon.types[0].type.name;
</script>

<svelte:head>
	<title>Pokedex - {pokemon.name}</title>
</svelte:head>

<div class="flex flex-col items-center"  transition:fly="{{ y: 200, duration: 200 }}">

    <h1 class="text-4xl text-center my-8 uppercase">{pokemon.name}</h1>
    
    <p>Type: <strong>{type}</strong> 
        | Height: <strong>{pokemon.height}</strong>
        | Weight: <strong>{pokemon.weight}</strong>
    </p>

    <img class="w-80" src={pokemon.sprites['front_default']} 
         alt={pokemon.name}
    />
</div>