// let maybeDate = Math.random() > 0.5
//     ? undefined 
//     : new Date();

// maybeDate as Date;

// maybeDate!

const seasonCounts = new Map([
    [6, "I love lucy"],
    [7, "The golden Girls"]
])

const maybeValue = seasonCounts.get(6)
// console.log(maybeValue.toUpperCase());

const knownValue = seasonCounts.get(6)!
console.log(knownValue.toUpperCase());
