<script lang="ts">
    import type { LayoutData } from './$types';
    
    export let data: LayoutData;
</script>

<nav>
    <a href="/">Home</a>
    <a href="/add">Add item</a>
</nav>
<main>
    <slot></slot>
</main>