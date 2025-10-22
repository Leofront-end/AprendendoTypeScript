// const getName = () => "Maria Bamford" as const

interface Joke {
    quote: string;
    style: "story" | "one-liner"
}

function tellJoke (joke: Joke) {
    if (joke.style == "one-liner") {
        console.log(joke.quote);
    } else {
        console.log(joke.quote.split('\n'));
    }
}

const narrowJoke = {
    quote: "If you stay alive for no other reason do it for splite.",
    style: "one-liner" as const
}

tellJoke(narrowJoke)

const wideObject = {
    quote: "Time flies when you are anxious!",
    style: "one-liner"
}

// tellJoke(wideObject)