const unionArray = [1157,"Tomoe"]

const readOnlyTuple = [1157,"Tomoe"] as const

const pairMutable: [number,string] = [1157,"Tomoe"]
pairMutable[0] = 1247

const pairAlsoMutable: [number,string] = [1157,"Tomoe"] as const;


const pairConst = [1157,"Tomoe"] as const;
// pairConst[0] = 1247;

function firstCharAndSizeAsCont(input: string) {
    return [input[0], input.length] as const
}

const [firstChar1,Size1] = firstCharAndSizeAsCont("Ching Shih")