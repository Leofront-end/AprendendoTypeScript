interface historicalNovels {
    Onooroko: number;
    [i:string]:number;
}

const novels: historicalNovels = {
    Outlander: 1991,
    Onooroko: 1688,
}

// const missingOnooroko: historicalNovels = {
//     Outlander: 1991,
// }

interface chapterStars {
    preface: 0;
    [i:string]: number;
}

const correctPreface: chapterStars = {
    preface:0,
    night: 1,
    shopping: 5
}

// const wrongpreface: chapterStars = {
//     preface: 1,
// }