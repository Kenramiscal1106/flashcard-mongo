<script lang="ts">
	import {
		Dialog,
		DialogHeader,
		DialogTitle,
		DialogDescription,
		DialogContent,
		DialogFooter
	} from '$lib/components/ui/dialog';
	import * as Select from '$lib/components/ui/select';
	import { Button } from '$lib/components/ui/button';
	import { Textarea } from '$lib/components/ui/textarea';
	import { BoxOptions, modalStore } from '$lib/stores';
	import type { PageData } from './$types';
	import { subjects } from '$lib';
	import { enhance } from '$app/forms';
	import { page } from '$app/stores';
	export let data: PageData;
	import { invalidate } from '$app/navigation';
	import EditCard from '$lib/components/EditCard.svelte';
</script>

<svelte:head>
	<title>Flashcards</title>
</svelte:head>
<div class="max-w-full lg:max-w-4xl xl:max-w-5xl sm:max-w-2xl m-auto">
	<div class="my-2">
		<h2>{$page.params.subject}</h2>
		<div>
			{data.flashcards.length} results
		</div>
	</div>
	<div class="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 sm:grid-cols-2 gap-4">
		{#each data.flashcards as flashcard}
			<EditCard {flashcard} />
		{/each}
	</div>
</div>
<Dialog open={$modalStore.open && $modalStore.mode === 'edit'}>
	<DialogContent class="sm:max-w-[425px]">
		<DialogHeader>
			<DialogTitle>Edit Card</DialogTitle>
			<DialogDescription>
				Make changes to the card here. Click save when you're done.
			</DialogDescription>
		</DialogHeader>
		<form
			action="/add/card?/updateObj"
			method="POST"
			use:enhance={() => {
				return async ({ result }) => {
					if ('data' in result && typeof result.data !== 'undefined' && result.data.success) {
						$modalStore.open = false;
						await invalidate('app:updateCard');
					}
				};
			}}
		>
			<div class="grid gap-4 py-4">
				<input type="text" name="id" value={$modalStore.flashcard._id} hidden />
				<div>
					<Textarea name="question" placeholder="question" value={$modalStore.flashcard.question} />
				</div>
				<div>
					<Textarea name="answer" placeholder="answer" value={$modalStore.flashcard.answer} />
				</div>
				<div>
					<Select.Root>
						<Select.Input name="subject"></Select.Input>
						<Select.Label>Subject</Select.Label>
						<Select.Trigger
							><Select.Value placeholder={$modalStore.flashcard.subject} /></Select.Trigger
						>
						<Select.Content>
							{#each subjects as subject}
								<Select.Item value={subject}>{subject}</Select.Item>
							{/each}
						</Select.Content>
					</Select.Root>
				</div>
				<div>
					<Select.Root>
						<Select.Input name="box"></Select.Input>
						<Select.Label>Classification</Select.Label>
						<Select.Trigger
							><Select.Value
								placeholder={$modalStore.flashcard.box || 'Select box'}
							/></Select.Trigger
						>
						<Select.Content>
							{#each BoxOptions as boxOption}
								<Select.Item value={boxOption}>{boxOption}</Select.Item>
							{/each}
						</Select.Content>
					</Select.Root> <br />
				</div>
			</div>
			<DialogFooter>
				<Button type="button" on:click={() => ($modalStore.open = false)} variant={'outline'}
					>Cancel</Button
				>
				<Button type="submit">Update Card</Button>
			</DialogFooter>
		</form>
	</DialogContent>
</Dialog>
<Dialog open={$modalStore.open && $modalStore.mode === 'delete'}>
	<DialogContent class="sm:max-w-[425px]">
		<DialogHeader>
			<DialogTitle>Delete Card</DialogTitle>
			<DialogDescription>Are you sure you want to delete this card?</DialogDescription>
		</DialogHeader>
		<form
			action="/add/card?/deleteObj"
			method="POST"
			use:enhance={() => {
				return async ({ result }) => {
					if ('data' in result && typeof result.data !== 'undefined' && result.data.success) {
						$modalStore.open = false;
						await invalidate('app:root');
					}
				};
			}}
		>
			<input type="text" value={$modalStore.flashcard._id} name="id" hidden />
			<Button type="button" on:click={() => ($modalStore.open = false)} variant={'outline'}
				>Cancel</Button
			>
			<Button variant={'destructive'} type="submit">Yes</Button>
		</form>
	</DialogContent>
</Dialog>
