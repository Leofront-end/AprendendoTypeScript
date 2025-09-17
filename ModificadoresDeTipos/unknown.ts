function greetComedianUnknown (name: unknown) {
    if (typeof name == "string") {
        console.log(`Anouncing ${name.toUpperCase()}!`);
    } else {
        console.log("Well, I'm off");     
    }
}

greetComedianUnknown("Leo")
greetComedianUnknown({})