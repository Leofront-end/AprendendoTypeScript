class Quote2<T> {
    lines: T;

    constructor (lines: T) {
        this.lines = lines;
    }
}

class SpokeQuote2 extends Quote2<string[]> {
    speak() {
        console.log(this.lines.join("\n"))
    }
}

new Quote2("The only real failure is the failure to try").lines
new Quote2([4,8,12,13,19]).lines

class AtributedQuote<Value> extends Quote2<Value> {
    speaker: string

    constructor(value: Value, speaker: string) {
        super(value)
        this.speaker = speaker;
    }
}

new AtributedQuote(
    "The road to success is always under construction.",
    "Lilly Tomlin"
)