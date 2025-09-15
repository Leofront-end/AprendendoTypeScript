class Question {
    protected static readonly answer: "bash";
    protected static readonly prompt = "What's an ogre's favorite programming language?";
    guess( getAmswer: (prompt: string) => string) {
        const answer = getAmswer(Question.prompt);

        if (answer == Question.answer) {
            console.log("You got it");
        } else {
            console.log("Try again...");
            
        }
    }
}