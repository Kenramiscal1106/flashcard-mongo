import { writable } from "svelte/store";

export type ModalState = {
    open: boolean,
    type: "flashcard-update" | "flashcard-delete" | "update-box",
    flashcard: {
        _id: string,
        subject:string,
        box?: string,
        question: string,
        answer: string
    }
}

export const modalStore = writable<ModalState>({
    open: false,
    type: "flashcard-update",
    flashcard: {
        _id: "",
        subject:"",
        question:"",
        answer: ""
    }
})