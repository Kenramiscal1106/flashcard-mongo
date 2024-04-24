<script lang="ts">
	import { enhance } from '$app/forms';
	import type { FlashCard } from '$lib/db';
	export let flashcard: FlashCard;
	let open = false;
	import CardTitle from './ui/card/card-title.svelte';
	import Card from './ui/card/card.svelte';
	import CardDescription from './ui/card/card-description.svelte';
	import CardHeader from './ui/card/card-header.svelte';
	import CardFooter from './ui/card/card-footer.svelte';
	import Button from './ui/button/button.svelte';
	import { fade } from 'svelte/transition';
	import { cn } from '$lib/utils';
</script>

<div class="flex-[0_0_20rem] relative pers-10 min-h-[27rem] card">
	<Card class={cn("z-10 duration-200 absolute w-full h-full top-0 left-0 flex flex-col")} {open}>
		<CardHeader>
			<CardDescription class="text-center text-neutral-600 dark:text-neutral-300"
				>{flashcard.subject}</CardDescription
			>
			<CardTitle tag="h2"><span in:fade={{duration: 175}}>{flashcard.question}</span></CardTitle>
		</CardHeader>

	
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
	<div class={cn(!open ? "rotate-card" : "rotate-default", "duration-200 absolute w-full h-full top-0 right-0 backface-hidden border bg-card shadow p-6 rounded-xl")}>
		<h4 class="text-center">{flashcard.answer}</h4>
		<div>
			<Button variant="outline" on:click={() => {open = false}}>X</Button>
		</div>
	</div>
</div>
<style>
	* {
		box-sizing: border-box;
	}
	.rotate-card, .rotate-default {
		transition: transform 0.5s ease;
	}
	.card {
		perspective: 1000px;
		transform-style: preserve-3d;
	}
	.rotate-card {
		transform: rotateY(-180deg);
	}
	.rotate-default {
		transform: rotateY(0deg);
	}
</style>
