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
  "Research",
  "Science",
  "Entrep",
  "Rewrite",
  "Theology",
  "FiliTwo",
  "Infolit"
] as const