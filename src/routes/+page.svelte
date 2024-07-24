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
	let filteredFlashcards: typeof data.flashcards = data.flashcards;
	$: subjectFilter = $page.url.searchParams.get('subject');
	$: {
		if (subjectFilter && subjectFilter !== '') {
			filteredFlashcards = data.flashcards.filter((item) => item.subject === subjectFilter);
		} else {
			filteredFlashcards = data.flashcards;
		}
	}
	import { invalidate } from '$app/navigation';
	import EditCard from '$lib/components/EditCard.svelte';
</script>

<svelte:head>
	<title>Flashcards</title>
</svelte:head>
<div class="max-w-full lg:max-w-4xl xl:max-w-5xl sm:max-w-2xl m-auto">
	<div class="my-2">
		<form method="GET">
			<Select.Root>
				<Select.Input name="subject"></Select.Input>
				<Select.Trigger class="max-w-64"
					><svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						class="w-4 h-4"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 0 1-.659 1.591l-5.432 5.432a2.25 2.25 0 0 0-.659 1.591v2.927a2.25 2.25 0 0 1-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 0 0-.659-1.591L3.659 7.409A2.25 2.25 0 0 1 3 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0 1 12 3Z"
						/>
					</svg>
					Filter Flashcard by:<Select.Value placeholder={''} /></Select.Trigger
				>
				<Select.Content>
					{#each subjects as subject}
						<Select.Item value={subject}>{subject}</Select.Item>
					{/each}
					<Select.Item value={''}>None</Select.Item>
				</Select.Content>
			</Select.Root>
			<div class="my-2">
				<Button type="submit">Filter</Button>
			</div>
		</form>
	</div>
	<div class="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 sm:grid-cols-2 gap-4">
		{#each filteredFlashcards as flashcard}
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
			action="/add?/updateObj"
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
			action="/add?/deleteObj"
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
