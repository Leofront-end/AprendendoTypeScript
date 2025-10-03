const ratings2 = {
    imb: 8.4,
    metacritic: 82,
};

function logRating(key: keyof typeof ratings2) {
    console.log(ratings2[key]);
}

logRating("imb")

// logRating("invalid")