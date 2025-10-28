function logWrapper<Input>(Callback: (input: Input) => void) {
    return (input: Input) => {
        console.log("Input:", input);
        Callback(input)
    }
}

logWrapper((input:string) => {
    console.log(input.length);
})

logWrapper((input:unknown) => {
    // console.log(input.length);
})

logWrapper<string>((input) => {
    console.log(input.length);
})