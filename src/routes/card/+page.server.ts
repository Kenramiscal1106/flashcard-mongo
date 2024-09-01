import { Flashcard } from '$lib/db';
import type { Actions, PageServerLoad } from '../$types';

export const load = (async ({ depends }) => {
	const flashcards = (
		await Flashcard.find(
			{},
			{
				question: true,
				answer: true,
				subject: true,
				box: true
			}
		)
	).map((item) => {
		return {
			question: item.question,
			answer: item.answer,
			subject: item.subject,
			box: item.box,
			_id: item._id.toString()
		};
	});
	depends('app:root');
	return {
		flashcards
	};
}) satisfies PageServerLoad;
