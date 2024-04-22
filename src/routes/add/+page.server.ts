import { Flashcard } from '$lib/db';
import { error } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';

export const load = (async () => {
	return {};
}) satisfies PageServerLoad;

export const actions: Actions = {
	add: async ({ request }) => {
		const formData = await request.formData();
		const question = formData.get('question');
		const answer = formData.get('answer');
		const subject = formData.get('subject');

		try {
			await Flashcard.create({ question, answer, subject });
		} catch {
			throw error(500, 'an error occured');
		}
	}
};
