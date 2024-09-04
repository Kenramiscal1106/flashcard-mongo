import { Flashcard } from '$lib/db';
import type { PageServerLoad } from './$types';

export const load = (async ({ depends, params }) => {
	const subject = (param: string) => {
		return param.charAt(0).toUpperCase() + param.slice(1);
	};
	const flashcards = (
		await Flashcard.find(
			{
				subject: subject(params.subject)
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
