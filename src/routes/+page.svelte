<script lang="ts">
	import Flashcard from '$lib/components/Flashcard.svelte';
	import type { PageData } from './$types';
	export let data: PageData;
</script>

<svelte:head>
	<title>Flashcards</title>
</svelte:head>
<div class="max-w-2xl flex flex-wrap gap-4 m-auto">
	{#each data.flashcards as flashcard}
		<Flashcard {flashcard} />
	{/each}
</div>