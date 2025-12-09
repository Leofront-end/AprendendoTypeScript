const resolvesUnknown = new Promise((resolve) => {
    setTimeout(() => resolve("Done!"),1000)
})

const resolveString = new Promise<string>((resolve) => {
    setTimeout(() => resolve("Done!"),1000)
})

const textEventually = new Promise<string>((resolve) => {
    setTimeout(() => resolve("Done!"),1000)
})

const lengthEventually = textEventually.then((text) => text.length)