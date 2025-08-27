function logPair(name: string, value: number) {
    console.log(`${name} has ${value}`);
}

const pairArray = ["Amage", 1]

// logPair(...pairArray)

const pairTupleIncorrect: [number, string] = [1, "Amage"]

// logPair(...pairTupleIncorrect)


const pairTupleCorrect: [string, number] = ["Amage", 1]

logPair(...pairTupleCorrect)

function logTrio(name: string, value: [number,boolean]) {
    console.log(`${name} has ${value[0]} ${value[1]}`);
}

const trios: [string, [number, boolean]][] = [
    ["Amanitore", [1,true]],
    ["Athelifore", [2,false]],
    ["Ann E. DUnwoody", [3, false]]
]

trios.forEach(trio => logTrio(...trio))

// trios.forEach(logTrio)