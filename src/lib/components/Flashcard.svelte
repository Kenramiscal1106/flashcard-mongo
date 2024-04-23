<script lang="ts">
	import { enhance } from '$app/forms';
	import type { FlashCard } from '$lib/db';
	export let flashcard: FlashCard;
	let open = false;
	import CardTitle from './ui/card/card-title.svelte';
	import CardContent from './ui/card/card-content.svelte';
	import Card from './ui/card/card.svelte';
	import CardDescription from './ui/card/card-description.svelte';
	import CardHeader from './ui/card/card-header.svelte';
	import CardFooter from './ui/card/card-footer.svelte';
	import Button from './ui/button/button.svelte';
</script>

<Card class="max-w-xs min-h-[27rem]">
	<CardHeader>
		<CardTitle tag="h2">{flashcard.question}</CardTitle>
		<CardDescription class="text-neutral-600 dark:text-neutral-300"
			>{flashcard.subject}</CardDescription
		>
	</CardHeader>

	<CardContent>
		{#if open}
		<p>{flashcard.answer}</p>
	{/if}
	</CardContent>

	<CardFooter >
		<Button
			on:click={() => {
				open = !open;
			}}
			>{open ? 'Hide' : 'Show'} answer
		</Button>
		<form method="POST" action="/add?/deleteObj" use:enhance>
			<input type="text" value={flashcard._id} name="id" hidden />
			<Button class="block" type="submit">Delete item</Button>
		</form>
	</CardFooter>
</Card>
<style>
	* {
		box-sizing: border-box;
	}
	section {
		max-width: 20rem;
		border: 1px solid black;
		min-height: 27rem;
		padding: 2rem 1.5rem;
		border-radius: 1rem;
		font-family: Arial, Helvetica, sans-serif;
	}
</style>
