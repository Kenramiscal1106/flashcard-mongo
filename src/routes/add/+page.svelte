<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import CardContent from '$lib/components/ui/card/card-content.svelte';
	import CardHeader from '$lib/components/ui/card/card-header.svelte';
	import CardTitle from '$lib/components/ui/card/card-title.svelte';
	import Card from '$lib/components/ui/card/card.svelte';
	import { Input } from '$lib/components/ui/input';
	import * as Select from "$lib/components/ui/select"
	import { Textarea } from '$lib/components/ui/textarea';
</script>

<svelte:head>
	<title>Flashcard | Add</title>
</svelte:head>
<form method="POST" action="?/addObj">
	<Card class="max-w-sm m-auto" open={false}>
		<CardHeader>
			<CardTitle tag="h2">Add FlashCards</CardTitle>
		</CardHeader>
		<CardContent>
			<Textarea name="question" placeholder="question" /><br />
			<Textarea name="answer" placeholder="answer" /><br />
			<!-- <Input type="text" name="subject" placeholder="subject" /><br /> -->
			<Select.Root>
				<Select.Input name="subject"></Select.Input>
				<Select.Label>Subject</Select.Label>
				<Select.Trigger><Select.Value placeholder="Select subject"/></Select.Trigger>
				<Select.Content>
					<Select.Item value="Research">Research</Select.Item>
					<Select.Item value="Science">Science</Select.Item>
					<Select.Item value="Entrep">Entrep</Select.Item>
					<Select.Item value="Rewrite">Rewrite</Select.Item>
					<Select.Item value="Theology">Theology</Select.Item>
					<Select.Item value="FiliTwo">FiliTwo</Select.Item>
					<Select.Item value="Infolit">Infolit</Select.Item>
				</Select.Content>
			</Select.Root> <br>
			<Button variant="default" type="submit">Submit</Button>
		</CardContent>
	</Card>
</form>
