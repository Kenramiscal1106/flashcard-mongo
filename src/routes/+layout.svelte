<script lang="ts">
	import '../app.css';
	import * as Menubar from '$lib/components/ui/menubar';
	import { buttonVariants } from '$lib/components/ui/button';
	import { page } from '$app/stores';
	import { modalStore } from '$lib/stores';
	$: if ($page.route.id !== '/') {
		$modalStore.open = false;
	}
</script>

<svelte:head>
	<link rel="preconnect" href="https://rsms.me/" />
	<link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
</svelte:head>
<Menubar.Root>
	<Menubar.Menu>
		<div class="m-auto">
			<a
				href="/"
				class={buttonVariants({ variant: $page.route.id === '/' ? 'secondary' : 'ghost' })}>Home</a
			>
			<a
				href="/quiz"
				class={buttonVariants({ variant: $page.route.id === '/quiz' ? 'secondary' : 'ghost' })}
				>Quiz</a
			>
		</div>
	</Menubar.Menu>
</Menubar.Root>
<main class="p-4 bg-inherit">
	<slot></slot>
</main>
