<script lang="ts">
	import { subjects } from '$lib';
</script>
<div class="max-w-lg m-auto px-4">
	<div class="flex flex-col gap-4">
		{#each subjects as subject}
			<a href={"/quiz/" + subject} class="rounded-xl border bg-card text-card-foreground shadow p-4 block">{subject}</a>
		{/each}
	</div>
</div>
<!-- 
 -->
