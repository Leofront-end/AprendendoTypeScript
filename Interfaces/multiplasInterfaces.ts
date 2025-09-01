interface givesNumber {
    giveNumber(): number
}

interface givesString {
    giveString(): string
}

interface giveBothAndEither extends givesNumber, givesString {
    giveEither(): number | string;
}

function useGiveBoth(instance: giveBothAndEither) {
    instance.giveEither()
    instance.giveNumber()
    instance.giveString()
}