type PoemWithPages1 = {
    name: string;
    pages: number;
    type: 'pages'
}

type PoemWithRhymes1 = {
    name: string;
    rhymes: boolean;
    type: 'rhymes'
}

type Poem2 = PoemWithPages1 | PoemWithRhymes1

const poem2: Poem2 = Math.random() > 0.5 
    ? {name: "The Double Image", pages: 7, type:"pages"}
    : {name: "Her Kind", rhymes: true, type:"rhymes"}

if (poem2.type == "pages") {
    console.log(`It's got pages: ${poem2.pages}`);
} else {
    console.log(`It rhymes: ${poem2.rhymes}`);
}

poem2.type

// poem2.pages