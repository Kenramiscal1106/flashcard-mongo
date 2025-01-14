import { Flashcard } from '$lib/db';
import type { PageServerLoad } from './$types';

export const load = (async ({ depends, params }) => {
	const flashcards = (
		await Flashcard.find(
			{
				subject: params.subject
			},
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
	depends('app:updateCard');
	return {
		flashcards
	};
}) satisfies PageServerLoad;
