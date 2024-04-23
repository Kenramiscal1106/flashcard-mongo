<script lang="ts">
	import '../app.css';
	import * as Menubar from '$lib/components/ui/menubar';
	import { buttonVariants } from '$lib/components/ui/button';
	import { page } from "$app/stores"
</script>
<Menubar.Root>
	<Menubar.Menu>
		<a href="/" class={buttonVariants({variant: $page.route.id === "/" ? "default" : "ghost"})}>Home</a>
		<a href="/add" class={buttonVariants({variant: $page.route.id === "/add" ? "default" : "ghost"})}>Add item</a>
	</Menubar.Menu>
</Menubar.Root>
<main class="p-4">
	<slot></slot>
</main>
