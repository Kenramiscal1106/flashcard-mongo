import mongoose from 'mongoose';
import type { BoxOptions } from './stores';

export type FlashCard = {
	subject: string;
	question: string;
	answer: string;
	box?: typeof BoxOptions[number];
	_id: string
};
export type Subject = {
	name: string;
}

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

const subject = new mongoose.Schema<Subject>({
	name: {
		type: String,
		required: true
	}
})

export const Flashcard = mongoose.models.Flashcard || mongoose.model("Flashcard", flashcard);

export const Subject = mongoose.models.Subject || mongoose.model("subjects", flashcard);