class withValue {
    immediate = 0;
    later: number;
    mayBeUndefined: number | undefined
    // unused: number

    constructor () {
        this.later = 1
    }
}

class missingInitializer {
    // property:string
}

// new missingInitializer().property.length