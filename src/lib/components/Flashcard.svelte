<script lang="ts">
	import type { FlashCard } from '$lib/db';

	import CardTitle from './ui/card/card-title.svelte';
	import Card from './ui/card/card.svelte';
	import CardDescription from './ui/card/card-description.svelte';
	import CardHeader from './ui/card/card-header.svelte';
	import CardFooter from './ui/card/card-footer.svelte';
	import CardContent from './ui/card/card-content.svelte';

	import Button from './ui/button/button.svelte';
	import { fade } from 'svelte/transition';
	import { cn } from '$lib/utils';
	import { modalStore } from '$lib/stores';

	export let flashcard: FlashCard;
	export let quiz: boolean;

	let open = false;
	function handleEdit(mode: 'edit' | 'delete') {
		return (e: MouseEvent) => {
			e.stopPropagation();
			modalStore.set({
				flashcard,
				open: true,
				mode: mode
			});
		};
	}
</script>

<div
	class="flex-[0_0_20rem] sm:flex-[0_0_27rem] relative pers-10 min-h-[27rem] sm:min-h-[20rem] card"
>
	<Card
		class={cn('z-10 duration-200 absolute w-full h-full top-0 left-0 flex flex-col')}
		{open}
		on:click={() => (open = true)}
	>
		<CardHeader></CardHeader>
		<CardContent>
			<CardTitle tag="h2" class="text-center"
				><span in:fade={{ duration: 175 }}>{flashcard.question}</span></CardTitle
			>
		</CardContent>
		{#if !quiz}
			<CardFooter>
				<Button on:click={handleEdit('edit')}>Edit card</Button>
			</CardFooter>
			<CardFooter>
				<Button on:click={handleEdit('delete')}>Delete card</Button>
			</CardFooter>
		{/if}
	</Card>
	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<div
		class={cn(
			!open ? 'rotate-card' : 'rotate-default',
			'duration-200 absolute w-full h-full top-0 right-0 backface-hidden border bg-card shadow p-6 rounded-xl'
		)}
		on:click={() => (open = false)}
	>
		<CardHeader>
			<!-- <CardDescription class="text-center text-neutral-600 dark:text-neutral-300"
			>{flashcard.subject}</CardDescription
		> -->
		</CardHeader>
		<CardContent>
			<CardTitle tag="h4" class="text-center">{flashcard.answer}</CardTitle>
		</CardContent>
	</div>
</div>

<style>
	* {
		box-sizing: border-box;
	}
	.rotate-card,
	.rotate-default {
		transition: transform 0.5s ease;
	}
	.card {
		perspective: 1000px;
		transform-style: preserve-3d;
	}
	.rotate-card {
		transform: rotateX(-180deg);
	}
	.rotate-default {
		transform: rotateX(0deg);
	}
</style>
