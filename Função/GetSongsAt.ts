const songs = ["Juice" , "Shake it Off" , "What's up"]

function runAndSongs(getSongAt2: (index: number) => string) {
    for (let i = 0; i <songs.length; i++) {
        console.log(getSongAt2(i)); 
    }
}

function getSongAt2(index:number) {
    return `${songs[index]}`
}

runAndSongs(getSongAt2)

function logSong(song: string) {
    return `${song}`
}

// runAndSongs(logSong) 