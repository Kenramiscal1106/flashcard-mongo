import mongoose from 'mongoose';
import { MONGO_URL } from '$env/static/private';
import type { BoxOptions } from './stores';

mongoose.connect(MONGO_URL)

export type FlashCard = {
	subject: string;
	question: string;
	answer: string;
	box?: typeof BoxOptions[number];
	_id: string
};

const flashcard = new mongoose.Schema<FlashCard>({
	answer: {
		type: String,
		required: true
	},
	question: {
		type: String,
		required: true
	},
	subject: {
		type: String,
		required: true
	},
	box: {
		type: String
	}
});

export const Flashcard = mongoose.models.Flashcard || mongoose.model("Flashcard", flashcard);