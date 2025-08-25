function SingAllTheSongs(singer: string, ...songs: string[]) {
    for (const song of songs) {
        console.log(`${song}, ${singer}`);
    }
}

SingAllTheSongs("Alicia Keys")
SingAllTheSongs("Lady Gaga", "Bad Romance","Just Dance"," Poker Face")
// SingAllTheSongs("Ella", 2000)