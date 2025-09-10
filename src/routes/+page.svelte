<script lang="ts">
	import { subjects } from '$lib';
	import { Button } from '$lib/components/ui/button';
	import { modalStore } from '$lib/stores';
</script>

<svelte:head>
	<title>Dashboard | Flashcard review</title>
</svelte:head>

<div class="max-w-full md:max-w-3xl sm:max-w-2xl m-auto">
	<div>
		<h1 class="text-3xl font-bold mb-5">Subjects</h1>
		<Button class="mb-5 no-underline gap-1">
			<svg
				width="18"
				height="18"
				viewBox="0 0 16 16"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M8 3.33325V12.6666"
					class="stroke-current"
					stroke-width="1.33333"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>
				<path
					d="M3.33337 8H12.6667"
					class="stroke-current"
					stroke-width="1.33333"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>
			</svg>
			Add Subject</Button
		>
	</div>
	<div class="flex flex-wrap gap-3 justify-center">
		{#each subjects as subject}
			<div
				class="basis-80 grow rounded-xl bg-card text-card-foreground shadow-md transition-shadow px-5 py-4 no-underline flex flex-col gap-4"
			>
				<div class="font-semibold text-xl">
					{subject}
				</div>
				<div>
					<Button href={'/cards/' + subject.toLowerCase()} class="no-underline">View</Button>
				</div>
			</div>
		{/each}
	</div>
</div>
