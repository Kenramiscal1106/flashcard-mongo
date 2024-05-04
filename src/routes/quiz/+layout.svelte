<script lang="ts">
	import { page } from '$app/stores';
	import { cubicInOut } from 'svelte/easing';
	import { fade } from 'svelte/transition';
</script>

{#key $page.route}
	<div in:fade={{duration: 300, easing: cubicInOut}}>
		<slot></slot>
	</div>
{/key}
