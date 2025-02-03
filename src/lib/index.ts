// place files you want to import through the `$lib` alias in this folder.
export async function shuffle<T>(arr: T[]) {
	let finalArr = new Array<T>();
	while (arr.length > 0) {
		let randomIndex = Math.floor(Math.random() * arr.length);
		finalArr.push(arr[randomIndex]);
		arr.splice(randomIndex, 1);
	}
	return finalArr;
}

export const subjects = [
	// 'Biology',
	// 'Biology 2nd',
	// 'Physics',
	// "Resetwo",
	// 'Resetwo 2nd',
	// "Empotek",
	// 'Empotek 2nd',
	// "Litera",
	// "Earthsci",
	// 'Earthsci 2nd',
	// "Philosophy",
	// "Filitri",
	// "Filitri 2nd"
	"Contare",
	"DISSSRED",
	"Perdev",
	"Biology",
	"ResePro",
	"Theofor",
	"Contare mid"
	/* 
	'Chemistry',
	'Earth Science, Astronomy',
	'Research',
	'Science',
	'Entrep',
	'Rewrite',
	'Theology',
	'FiliTwo',
	'Infolit' */
] as const;

export type HeroIconVariant = 'solid' | 'outline' | 'mini';
