interface wordCounts {
    [i:string]: number;
}

const counts: wordCounts = {};

counts.apple = 0;
counts.banana = 1;

// counts.cherry = false;

interface DatesByName {
    [i:string]: Date;
}

const publishDates: DatesByName = {
    Frankenstein: new Date("1 September 2025")
}

publishDates.Frankenstein
console.log(publishDates.Frankenstein.toString());

publishDates.Beloved;
console.log(publishDates.Beloved.toString());


