<script lang="ts">
	import type { PageData } from './$types';
	import Flashcard from '$lib/components/Flashcard.svelte';
	import Button from '$lib/components/ui/button/button.svelte';
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	export let data: PageData;

	let item = 1;
	function handleKeyDown(e: KeyboardEvent) {
		if (e.key === 'ArrowRight') {
			item++;
		} else if (e.key === 'ArrowLeft') {
			item--;
		}
	}
	onMount(() => {
		window.addEventListener('keydown', handleKeyDown);
		return () => {
			window.removeEventListener('keydown', handleKeyDown);
		};
	});
</script>

<svelte:head>
	<title>{$page.params.subject}</title>
</svelte:head>
<div class="m-auto flex gap-8 items-center justify-center">
	{#if data.flashcards.length > 0}
		{#key item}
			<Flashcard flashcard={data.flashcards[item - 1]} quiz={true} />
		{/key}
	{:else}
		<div>
			<h1>There are no flashcards in this subject</h1>
		</div>
	{/if}
</div>
<!-- progress bar -->
<div class="max-w-xl mx-auto my-3">
	<div class="text-center my-1">
		{item} / {data.flashcards.length}
	</div>
	<div class="relative bg-neutral-200 rounded-md h-3 z-30 overflow-hidden">
		<div
			class="absolute bg-blue-500 rounded-md h-3 transition-all duration-150"
			style:width={`${(item / data.flashcards.length) * 100}%`}
		></div>
	</div>
</div>
{#if data.flashcards.length > 0}
	<div class="flex gap-3 item-center justify-center p-5">
		<span>
			<Button variant="outline" on:click={() => item--} disabled={item - 1 <= 0}>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="16"
					height="16"
					fill="currentColor"
					class="bi bi-chevron-left"
					viewBox="0 0 16 16"
				>
					<path
						fill-rule="evenodd"
						d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"
					/>
				</svg>
			</Button>
			<Button variant="outline" on:click={() => item++} disabled={item >= data.flashcards.length}>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="16"
					height="16"
					fill="currentColor"
					class="bi bi-chevron-right"
					viewBox="0 0 16 16"
				>
					<path
						fill-rule="evenodd"
						d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"
					/>
				</svg>
			</Button>
		</span>
	</div>
{/if}
