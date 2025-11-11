interface LinkedNode<Value> {
    next?: LinkedNode<Value>;
    value: Value;
}

function getLast<Value>(node: LinkedNode<Value>): Value {
    return node.next ? getLast(node.next) : node.value
}

let lastDate = getLast({
    value: new Date("09-13-1993")
})

let lastFruit = getLast({
    next: {
        value: "banana"
    },
    value: "apple"
})

// let lastMismatch = getLast({
//     next: {
//         value: 123
//     },
//     value: false
// })

interface createLike<T> {
    contents: T
}

// let missingGeneric: createLike = {
//     content: "??"
// }