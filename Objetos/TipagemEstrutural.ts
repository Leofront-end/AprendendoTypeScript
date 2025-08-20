type withFirstName = {
    firstName: string;
}

type withLastName = {
    lastName: String
}

const hasBoth = {
    firstName: "Lucille",
    lastName: "Clifton"
}

let withFirstName: withFirstName = hasBoth
let withLastName: withLastName = hasBoth 