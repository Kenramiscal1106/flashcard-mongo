import { Flashcard } from '$lib/db';
import { error } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';
import mongoose from 'mongoose';

export const load = (async () => {
	return {};
}) satisfies PageServerLoad;

export const actions: Actions = {
	addObj: async ({ request }) => {
		const formData = await request.formData();
		const question = formData.get('question');
		const answer = formData.get('answer');
		const subject = formData.get('subject');

		try {
			await Flashcard.create({ question, answer, subject });
		} catch {
			throw error(500, 'an error occured');
		}
	},
	deleteObj: async({request}) => {
		const formData = await request.formData();
		const id = formData.get('id')

		try {
			await Flashcard.deleteOne({
				_id: id
			})
		}
		catch {
			console.log("error delete")
		}
	}
};
