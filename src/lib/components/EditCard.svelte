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

<Card class={cn('z-10 duration-200 flex flex-col flex-[1_0_0%]')} open={false}>
	<CardHeader class="flex-shrink"></CardHeader>
	<CardContent class="flex-grow">
		<div class="flex flex-col h-full">
			<div>
				<CardTitle tag="h4">
					<span in:fade={{ duration: 175 }}> {flashcard.question}</span>
				</CardTitle>
				<span
					class={cn(
						'dark:text-neutral-400 text-neutral-700 transition-opacity',
						open ? 'opacity-100' : 'opacity-0'
					)}>{flashcard.answer}</span
				>
			</div>
			<div class="mt-auto flex gap-2 pt-4">
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

<style>
	* {
		box-sizing: border-box;
	}
</style>
