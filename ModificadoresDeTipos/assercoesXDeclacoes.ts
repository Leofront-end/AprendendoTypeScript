interface Entertainer {
    acts: string[];
    name: string;
}

// const declared: Entertainer = {
//     name: "Moms Mabley",
// }

const asserted = {
    name: "Moms Mabley",
} as Entertainer

// console.log(declared.acts.join(', '));
console.log(asserted.acts.join(', '));