function rateSong(song: string, rating = 0){
    console.log(`${song} gets ${rating}/5 stars`);
}

rateSong("Photograph")
rateSong("Set Fire to the Rain", 5)
rateSong("Set Fire to the rain",undefined)
// rateSong("At Last!", "100")