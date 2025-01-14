import { writable } from 'svelte/store';

export const BoxOptions = [
	'everyday',
	'1-2 days',
	'4-7 days',
	'1 1/2 week',
	'2 weeks',
	'1 month'
] as const;

export type ModalState = {
	open: boolean;
	flashcard: {
		_id: string;
		subject: string;
		box?: (typeof BoxOptions)[number];
		question: string;
		answer: string;
	};
	mode: 'edit' | 'delete' | 'create';
};

export const modalStore = writable<ModalState>({
	open: false,
	flashcard: {
		_id: '',
		subject: '',
		question: '',
		answer: ''
	},
	mode: 'edit'
});
