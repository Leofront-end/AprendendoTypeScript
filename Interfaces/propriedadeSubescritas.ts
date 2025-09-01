interface WithNullableName {
    name: string | undefined;
}

interface withNonNullableName extends WithNullableName {
    name: string;
}

// interface withNumericName extends WithNullableName {
//     name: number | string;
// }