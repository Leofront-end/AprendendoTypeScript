interface Writting2 {
    title: string;
}

interface Novells extends Writting2 {
    pages: number;
}

let myNovella: Novells = {
    pages: 195,
    title: 'Ethan Frome'
}

// let missingPages: Novells = {
//     title: 'The Awakening'
// }

// let extraProperty: Novells = {
//     pages: 300,
//     strategy: "baseline",
//     style: "Naturalism"
// }