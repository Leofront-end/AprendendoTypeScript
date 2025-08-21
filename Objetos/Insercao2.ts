type shortPoem = {author: string} & (
    | {kigo: string, type: "haiku"}
    | {meter: number, type: "villanelle"}
)

const morningGlory: shortPoem = {
    author: "Fuduka Chiyo-ni",
    kigo: "Morning glory",
    type: "haiku"
}

// const oneArt: shortPoem = {
//     author: "Elizabeth Bishop",
//     type: "villanelle"
// }