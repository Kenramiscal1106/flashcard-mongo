<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';
	import { cn } from '$lib/utils.js';

	type $$Props = HTMLAttributes<HTMLDivElement> & {
		open: boolean;
	};

	let className: $$Props['class'] = undefined;
	export { className as class };
	export let open: boolean;
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<div
	class={cn(
		'backface-hidden rounded-xl border bg-card text-card-foreground shadow relative',
		className,
		open ? 'rotate-card' : 'rotate-default'
	)}
	{...$$restProps}
	on:click
	on:focusin
	on:focusout
	on:mouseenter
	on:mouseleave
>
	<slot />
</div>

<style>
	* {
		box-sizing: border-box;
	}
	.rotate-card,
	.rotate-default {
		transition: transform 0.5s ease;
		perspective: 4rem;
	}
	.rotate-card {
		transform: rotateX(180deg);
	}
	.rotate-default {
		transform: rotateX(0deg);
	}
</style>
