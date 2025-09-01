interface novel {
    author: {
        name: string
    };
    setting: Setting;
}

interface Setting {
    place: string;
    year: number;
}

let myNovel: novel

myNovel = {
    author: {
        name: "Jane Austen"
    },
    setting: {
        place: 'England',
        year: 1812,
    }
};

// myNovel = {
//     author: {
//         name: "Emily Bronte"
//     },
//     setting: {
//         place: 'West Yorkshire',
//     }
// }