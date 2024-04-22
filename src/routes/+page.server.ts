import { Flashcard } from '$lib/db';
import type { PageServerLoad } from './$types';

export const load = (async () => {
	const flashcards = await Flashcard.find({});
	return { flashcards };
}) satisfies PageServerLoad;
