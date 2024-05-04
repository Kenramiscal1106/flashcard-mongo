import { shuffle } from '$lib';
import type { PageServerLoad } from './$types';

export const load = (async ({params, parent}) => {
    const data = await parent()
    const subjectFilter = data.flashcards.filter(flashcard => flashcard.subject === params.subject)
    console.log("working on client, params:", params.subject)
    return {
        flashcards: await shuffle(subjectFilter)
    }
}) satisfies PageServerLoad;