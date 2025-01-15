<script lang="ts">
	import { subjects } from '$lib';
	import { Button } from '$lib/components/ui/button';
</script>

<svelte:head>
	<title>Quiz | Flashcard review</title>
</svelte:head>
<div class="max-w-full md:max-w-3xl sm:max-w-2xl m-auto">
	<div class="grid grid-cols-2 gap-4">
		{#each subjects as subject}
			<div
				class="rounded-xl bg-card text-card-foreground shadow-md transition-shadow px-5 py-4 no-underline flex flex-col gap-4"
			>
				<div class="font-semibold text-xl">
					{subject}
				</div>
				<div>
					<Button href={'/quiz/' + subject} class="no-underline">Start review</Button>
				</div>
			</div>
		{/each}
	</div>
</div>
<!-- 
 -->
