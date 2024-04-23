<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import CardContent from '$lib/components/ui/card/card-content.svelte';
	import CardHeader from '$lib/components/ui/card/card-header.svelte';
	import CardTitle from '$lib/components/ui/card/card-title.svelte';
	import Card from '$lib/components/ui/card/card.svelte';
	import { Input } from '$lib/components/ui/input';
	import { Textarea } from '$lib/components/ui/textarea';
</script>

<form method="POST" action="?/addObj">
	<Card class="max-w-sm m-auto">
		<CardHeader>
			<CardTitle tag="h2">Add FlashCards</CardTitle>
		</CardHeader>
		<CardContent>
			<Textarea name="question" placeholder="question" /><br />
			<Textarea name="answer" placeholder="answer" /><br />
			<Input type="text" name="subject" placeholder="subject" /><br />
			<Button variant="default">Submit</Button>
		</CardContent>
	</Card>
</form>
