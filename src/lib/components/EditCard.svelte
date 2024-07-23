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
	import PencilIcon from './icon/pencil-icon.svelte';
	import TrashIcon from './icon/trash-icon.svelte';
	import EyeIcon from './icon/eye-icon.svelte';
	import EyeSlashIcon from './icon/eye-slash-icon.svelte';

	export let flashcard: FlashCard;
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

	function toggleOpen(e: MouseEvent): void {
		open = !open;
	}
</script>

<div class="card">
	<Card class={cn('z-10 duration-200 w-full h-full flex flex-col')} open={false}>
		<CardHeader>
			<CardDescription class="text-center text-neutral-600 dark:text-neutral-300">
				{flashcard.subject}</CardDescription
			>
		</CardHeader>
		<CardContent>
			<div class="flex">
				<CardTitle tag="h2">
					{#key open}
						<span in:fade={{ duration: 175 }}> {open ? flashcard.answer : flashcard.question}</span>
					{/key}</CardTitle
				>
				<div class="ml-auto flex gap-2 pl-4 items-center">
					<Button class="h-max p-2 block" on:click={toggleOpen} variant="outline">
						{#if open}
							<EyeIcon variant="outline" />
						{:else}
							<EyeSlashIcon variant="outline" />
						{/if}
					</Button>
					<Button on:click={handleEdit('edit')} class="h-max p-2 block" variant="outline">
						<PencilIcon variant="outline" />
					</Button>
					<Button on:click={handleEdit('delete')} class="h-max p-2 block" variant="outline"
						><TrashIcon variant="outline" /></Button
					>
				</div>
			</div>
		</CardContent>
		<CardFooter></CardFooter>
	</Card>
	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<!-- <div
		class={cn(
			!open ? 'rotate-card' : 'rotate-default',
			'duration-200 absolute w-full h-full top-0 right-0 backface-hidden border bg-card shadow p-6 rounded-xl flex flex-col justify-center'
		)}
		on:click={() => (open = false)}
	>
		<h4 class="text-center">{flashcard.answer}</h4>
	</div> -->
</div>

<style>
	* {
		box-sizing: border-box;
	}
</style>
