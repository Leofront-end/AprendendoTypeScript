type NumberToString = (input: number) => string

function useNumberToString(NumberToString: NumberToString) {
    console.log(`The string is: ${NumberToString(1234)}`);
}

useNumberToString((input) => `${input}! Hooray!`)

// useNumberToString((input) => input*2)