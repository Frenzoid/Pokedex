<script>
    import Nav from "../components/nav.svelte";

    // THOSE @tailwind NEED TO BE SPECIFICALLY IN A FILE.
    import "../css/__layout.css";
</script>

<svelte:head>
    <link rel="icon" type="image/svg" href={"https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Pok%C3%A9_Ball_icon.svg/1026px-Pok%C3%A9_Ball_icon.svg.png"} />
</svelte:head>

<div class="p-8 max-w-6xl mx-auto">
    <p>Made with ❤️ by <a class="text-purple-900 font-bold" href="https://www.github.com/Frenzoid" target="_blank">MrFrenzoid</a>.</p>
    <Nav />
    <slot />
</div>