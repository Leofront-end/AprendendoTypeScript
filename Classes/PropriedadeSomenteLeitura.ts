class Quote {
    readonly text: string;

    constructor(text:string) {
        this.text = text
    }

    emphasize () {
        // this.text += "!"
    }
}

const quote = new Quote (
    "There is a brillant child locked inside every student."
)

// quote.text = "Ha!"

class randomQuote {
    readonly explicit: string = "Home is the nicest word there is."
    readonly implicit = "Home is the nicest word there is."

    constructor () {
        if (Math.random () > 0.5) {
            this.explicit = "We start learning the minute we're born."

            // this.implicit = "We start learning the minute we're born."
        }
    }
}

const quote2 = new randomQuote()
quote2.explicit
quote2.implicit