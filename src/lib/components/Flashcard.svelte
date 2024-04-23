<script lang="ts">
	import { enhance } from '$app/forms';
	import type { FlashCard } from '$lib/db';
	export let flashcard: FlashCard;
	let open = false;
</script>

<section>
	<h3>{flashcard.question}</h3>
	<h4>{flashcard.subject}</h4>
	{#if open}
		<p>{flashcard.answer}</p>
	{/if}
	<button
		on:click={() => {
			open = !open;
		}}>{open ? 'Hide' : 'Show'} answer</button
	>
	<form method="POST" action="/add?/deleteObj" use:enhance>
		<input type="text" value={flashcard._id} name="id" hidden />
		<button>Delete item</button>
	</form>
</section>
<style>
    * {
        box-sizing: border-box;
    }
    section {
        max-width: 20rem;
        border:1px solid black;
        min-height: 27rem;
        padding: 2rem 1.5rem;
        border-radius: 1rem;
        font-family:Arial, Helvetica, sans-serif;
    }
</style>