<script lang="ts">
	import { Menubar as MenubarPrimitive } from 'bits-ui';
	import { cn } from '$lib/utils.js';

	type $$Props = MenubarPrimitive.Props;

	let className: $$Props['class'] = undefined;
	export { className as class };
</script>

<MenubarPrimitive.Root
	class={cn(
		'flex items-center space-x-3 rounded-md border bg-background py-3 px-3 shadow-sm relative ',
		className
	)}
>
	<slot />
</MenubarPrimitive.Root>
