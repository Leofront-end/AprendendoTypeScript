function makeTuple<First, Second>(first:First, second: Second) {
    return [first,second] as const
}

let tuple = makeTuple(true,"abc")

function makePair<Key,Value>(key:Key, value: Value) {
    return { key, value}
}

makePair("abc",123)
makePair<string,number>("abc",123)
makePair<"abc",123>("abc",123)