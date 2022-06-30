
<script>
    import { fly } from "svelte/transition";
</script>

<svelte:head>
    <title>Pokedex - About</title>
</svelte:head>

<h1 class="text-2xl text-center my-4 uppercase"  transition:fly="{{ y: 200, duration: 200 }}">About</h1>
<p class="text-center"> This is a simple Pokedex made with SvelteKit :).</p>