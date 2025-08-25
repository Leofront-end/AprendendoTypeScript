function SingSongRecursive (songs: string[], count = 0): number {
    return songs.length ? SingSongRecursive(songs.slice(1), count++) : count
}

const SingSongRecursive2 = (songs: string[], count = 0): number => {
    return songs.length ? SingSongRecursive(songs.slice(1), count++) : count
}