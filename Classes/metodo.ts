class Greeter {
    constructor(message:string) {
        console.log(`As I always say: ${message}`);
    }

    greet (name: string) {
        console.log(`${name}, do your stuff`);
    }
}

// new Greeter().greet("Leo")

// new Greeter().greet()

new Greeter('Take chances, make mistakes, get messy')