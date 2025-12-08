interface Quote3<T = string> {
    value: T;
}

let explicit:Quote3<number> = {value: 123}

let implicit: Quote3 = {value: "Be yourself. The world worships the original"}

// let mismatch: Quote3 = {value:123}

interface KeyValuePair<Key,Value = Key> {
    key: Key;
    value: Value
}

let allExplicit: KeyValuePair<string,number> = {
    key: "rating",
    value: 10
}

let oneDefault: KeyValuePair<string,string> = {
    key: "rating",
    value: "ten"
}

// let firstMissing: KeyValuePair = {
//     key: "rating",
//     value: 10
// }

function inTheEnd<first,Second,Thid = number, Fourth = string>() {}

// function inTheMiddle<first, second = boolean, third = number, fourth>() {}