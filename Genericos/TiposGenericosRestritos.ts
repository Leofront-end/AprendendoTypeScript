interface WithLength {
    length: number;
}

function logWithLength<T extends WithLength> (input: T) {
    console.log(`Length: ${input.length}`);
    return input
}

logWithLength("No one can figure out worth but you.")
logWithLength([false,true])
logWithLength( {length: 123})

// logWithLength(new Date())