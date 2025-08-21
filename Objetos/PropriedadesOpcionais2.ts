type Writters = {
    author: string | undefined,
    editor?: string
}

const hasRequired: Writters = {
    author: undefined
}

// const missingRequired: Writters = {}