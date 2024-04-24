<script lang="ts">
	import { shuffle } from '$lib';
    import type { PageData } from './$types';
    import Flashcard from "$lib/components/Flashcard.svelte"
    import Button from "$lib/components/ui/button/button.svelte"
    
    export let data: PageData;
    const flashcards = data.flashcards;
    let item = 1;
    $: {
        if (item > flashcards.length) {
            item = 1
        }
        if (item < 1) {
            item = flashcards.length
        }
    }
</script>


<div class="m-auto flex gap-8 items-center justify-center">
    <Button variant="outline" on:click={() => item--}>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"/>
          </svg>
    </Button>
    {#key item}
    <Flashcard flashcard={flashcards[item - 1]} />
    {/key}
    <Button variant="outline" on:click={() => item++}>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/>
          </svg>
    </Button>
</div>