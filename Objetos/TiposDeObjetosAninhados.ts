type Author = {
    firstName: string;
    lastname: string;
}

type Poem = {
    author: Author;
    name: string;
}

const poetMatch1: Poem = {
    author: {
        firstName: "Sylvia",
        lastname: "Plath"
    },
    name: "Lady Lazarus"
}

// const poemMismatch: Poem = {
//     author: {
//         name: "Sylvia Plath"
//     },
//     name: "Tupulis"
// }