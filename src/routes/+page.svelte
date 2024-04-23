<script lang="ts">
	import Flashcard from '$lib/components/Flashcard.svelte';
import type { PageData } from './$types';
	export let data: PageData;
</script>

<svelte:head>
	<title>Flashcards</title>
</svelte:head>
<main>
	<h1>Welcome to SvelteKit</h1>
	<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
	{#each data.flashcards as flashcard}
		<Flashcard {flashcard}/>
	{/each}
</main>

