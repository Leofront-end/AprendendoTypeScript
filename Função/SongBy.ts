function AnnounceSongBy (song: string, singer: string | undefined) {
    console.log(`Song: ${song}`);
    if (singer) {
        console.log(`Singer: ${singer}`);
    }
}

// AnnounceSongBy("Greensleeves")
AnnounceSongBy("Greensleeves", undefined)
AnnounceSongBy("Chandelier", "Sia")