async function lengthAftesSecond(text:string) {
    await new Promise((resolve) => setTimeout(resolve,1000))
    return text.length
}

async function lengthImmediately(text:string) {
    return text.length
}

async function givesPromisseForString(): Promise<string> {
    return "Done!"
}

// async function givesString(): string {
//     return "Done!"
// }