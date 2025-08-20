type Poet1 = {
    born: number,
    name: string
}

const poetMatch: Poet1 = {
    born: 1928,
    name: "Maya Angelou"
}

// const extraProperty: Poet1 = {
//     activy: "walking",
//     born: 1935,
//     name: "Mary Oliver"
// }

const existingObject = {
    activy: "walking",
    born: 1935,
    name: "Mary Oliver"
}

const extraPropertyButOk: Poet1 = existingObject