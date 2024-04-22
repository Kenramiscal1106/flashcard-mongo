import mongoose from 'mongoose';
import { MONGO_URL } from '$env/static/private';

mongoose.connect(MONGO_URL).then((value) => {
	console.log(value);
});

type FlashCard = {
	subject: string;
	question: string;
	answer: string;
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
	}
});

export const Flashcard = mongoose.model('Flashcard', flashcard);
