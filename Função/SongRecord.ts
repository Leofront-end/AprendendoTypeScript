function songRecord (song: string): Date | undefined {
    switch (song) {
        case "Strange Fruit": return new Date('April 20, 1939')

        // case "Greensleeves": return "unknown"

        default: return undefined
    }
}