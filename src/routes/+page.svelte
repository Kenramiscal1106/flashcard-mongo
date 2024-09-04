<script lang="ts">
	import { subjects } from '$lib';
</script>

<div class="max-w-full lg:max-w-4xl xl:max-w-5xl sm:max-w-2xl m-auto">
	{#each subjects as subject}
		<a href={`/cards/${subject.toLowerCase()}`}>{subject}</a> <br />
	{/each}
</div>
