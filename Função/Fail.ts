function fail (message: string): never {
    throw new Error(`Invarian failure: ${message}`)
}

function workWithUnsafeParam (param: unknown) {
    if(typeof param !== "string") {
        fail(`param should not a string, not a ${typeof param}`)
    }
    param.toUpperCase()
}