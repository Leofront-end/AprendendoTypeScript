interface MoreNarrowNumbers {
    [i:number]: string;
    [i: string]: string | undefined;
}

const mixesNumbersAndStrings : MoreNarrowNumbers = {
    0: '',
    key: '',
    key1: undefined
}

interface MoreNarrowString {
    [i:number]: string | undefined
}