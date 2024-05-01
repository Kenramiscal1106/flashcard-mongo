<script lang="ts">
	import Flashcard from '$lib/components/Flashcard.svelte';
	import {
		Dialog,
		DialogHeader,
		DialogTitle,
		DialogDescription,
		DialogContent,
		DialogFooter
	} from '$lib/components/ui/dialog';
	import * as Select from "$lib/components/ui/select"
	import { Button } from '$lib/components/ui/button';
	import { Input } from '$lib/components/ui/input';
	import { Textarea } from '$lib/components/ui/textarea';
	import { BoxOptions, modalStore } from '$lib/stores';
	import type { PageData } from './$types';
	import { enhance } from '$app/forms';
	export let data: PageData;
	import {invalidate} from "$app/navigation"
</script>

<svelte:head>
	<title>Flashcards</title>
</svelte:head>
<div class="max-w-2xl flex flex-wrap gap-4 m-auto justify-center">
	{#each data.flashcards as flashcard}
		<Flashcard {flashcard} quiz={false} />
	{/each}
	<Dialog open={$modalStore.open}>
		<DialogContent class="sm:max-w-[425px]">
			<DialogHeader>
				<DialogTitle>Edit profile</DialogTitle>
				<DialogDescription>
					Make changes to the card here. Click save when you're done.
				</DialogDescription>
			</DialogHeader>
			<form action="/add?/updateObj" method="POST" use:enhance={() => {
				return async({result}) => {
					if ("data" in result && typeof result.data !== "undefined" && result.data.success) {
						$modalStore.open = false
						await invalidate("app:root")
					}
				}
			}}>
				<div class="grid gap-4 py-4">
					<input type="text" name="id" value={$modalStore.flashcard._id} hidden/>
					<div>
						<Textarea
							name="question"
							placeholder="question"
							value={$modalStore.flashcard.question}
						/>
					</div>
					<div>
						<Textarea
							name="answer"
							placeholder="answer"
							value={$modalStore.flashcard.answer}
						/>
					</div>
					<div>
						<Select.Root>
							<Select.Input name="subject"></Select.Input>
							<Select.Label>Subject</Select.Label>
							<Select.Trigger><Select.Value placeholder={$modalStore.flashcard.subject}/></Select.Trigger>
							<Select.Content>
								<Select.Item value="Research">Research</Select.Item>
								<Select.Item value="Science">Science</Select.Item>
								<Select.Item value="Entrep">Entrep</Select.Item>
								<Select.Item value="Rewrite">Rewrite</Select.Item>
								<Select.Item value="Theology">Theology</Select.Item>
								<Select.Item value="FiliTwo">FiliTwo</Select.Item>
								<Select.Item value="Infolit">Infolit</Select.Item>
							</Select.Content>
						</Select.Root>
					</div>
					<div>
						<Select.Root>
							<Select.Input name="box"></Select.Input>
							<Select.Label>Classification</Select.Label>
							<Select.Trigger><Select.Value placeholder={$modalStore.flashcard.box || "Select box"}/></Select.Trigger>
							<Select.Content>
								{#each BoxOptions as boxOption}
									<Select.Item value={boxOption}>{boxOption}</Select.Item>
								{/each}
							</Select.Content>
						</Select.Root> <br>
					</div>
				</div>
				<DialogFooter>
					<Button type="button" on:click={() => $modalStore.open = false} variant={"outline"}>Cancel</Button>
					<Button type="submit">Update Card</Button>
				</DialogFooter>
			</form>
		</DialogContent>
	</Dialog>
</div>
