interface Livros {
    author?: string,
    pages: number
}

const Ok: Livros = {
    author: "Rita Dove",
    pages: 89,
}

const missing: Livros = {
    pages: 80
}