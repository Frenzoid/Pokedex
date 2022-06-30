<script>
    import { base } from '$app/paths';
    import { fade } from "svelte/transition";
    export let name;
    export let id;
    export let image;
</script>

<a  transition:fade="{{duration: 300}}"
    class="p-6 bg-gray-100 hover:bg-gray-300 text-gray-800 text-center rounded-md shadow-sm hover:shadow-md flex flex-col items-center" 
    href={`${base}/pokemon/${id}`}> 
    
    <img class="h-40 w-40" src={image} alt={name} />
    <h2 class="uppercase text-xl">{id}.  {name}</h2>
</a>