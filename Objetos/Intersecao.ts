type Artwork = {
    genre: string;
    name: string;
}

type Writting = {
    pages: number
    name: string
}

type WrittenArt = Artwork & Writting