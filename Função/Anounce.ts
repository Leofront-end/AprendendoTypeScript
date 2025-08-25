function AnnounceSong (song: string, singer?: string) {
    console.log(`Song: ${song}`);
    if (singer) {
        console.log(`Singer: ${singer}`);
    }
}

AnnounceSong("Greensleeves")
AnnounceSong("Greensleeves", undefined)
AnnounceSong("Chandelier", "Sia")