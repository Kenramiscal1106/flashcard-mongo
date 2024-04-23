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
	import { fade } from 'svelte/transition';
</script>

<Card class="min-h-[27rem] flex flex-col flex-[0_0_20rem]">
	<CardHeader>
		<CardDescription class="text-center text-neutral-600 dark:text-neutral-300"
			>{flashcard.subject}</CardDescription
		>
		{#if !open}
			<CardTitle tag="h2"><span in:fade={{duration: 175}}>{flashcard.question}</span></CardTitle>
		{/if}
	</CardHeader>

	<CardContent>
		{#if open}
		<div in:fade={{duration: 175}}>
			<h4 class="text-center">{flashcard.answer}</h4>
		</div>
		{/if}
	</CardContent>

	<CardFooter class="mt-auto space-y-2">
		<div class="w-full">
			<Button
				variant="outline"
				class="block w-full"
				on:click={() => {
					open = !open;
				}}
				>{open ? 'Hide' : 'Show'} answer
			</Button>
		</div>
		<div class="w-full">
			<form method="POST" action="/add?/deleteObj" use:enhance>
				<input type="text" value={flashcard._id} name="id" hidden />
				<Button class="block w-full" type="submit" variant="destructive">Delete item</Button>
			</form>
		</div>
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
