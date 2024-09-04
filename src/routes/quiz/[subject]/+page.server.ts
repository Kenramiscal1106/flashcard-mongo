import { shuffle } from '$lib';
import { Flashcard } from '$lib/db';
import type { PageServerLoad } from './$types';

export const load = (async ({ params }) => {
	const flashcards = (
		await Flashcard.find(
			{
				subject: params.subject
			},
			{
				question: true,
				answer: true,
				subject: true
			}
		)
	).map((item) => {
		return {
			question: item.question,
			answer: item.answer,
			subject: item.subject,
			_id: item._id.toString()
		};
	});
	return {
		flashcards: await shuffle(flashcards)
	};
}) satisfies PageServerLoad;
