class CurriedCallback<Input> {
    #callback: (input: Input) => void

    constructor (callback: (input:Input)=> void) {
        this.#callback = (input: Input) => {
            console.log("Input: ",input);
            callback(input)
        }
    }

    call(input: Input) {
        this.#callback(input)
    }
}

new CurriedCallback((input:string) => {
    console.log(input.length);
})

// new CurriedCallback((input) => {
//     console.log(input.length);
// })

new CurriedCallback<string>((input) => {
    console.log(input.length);
})

// new CurriedCallback<string>((input:boolean) => {

// } )