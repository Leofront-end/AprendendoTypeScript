interface Learner {
    name: string;
    study(hours: number): void
}

class student implements Learner {
    name: string

    constructor (name: string) {
        this.name = name
    }

    study(hours: number): void {
        for (let index = 0; index < hours; index++) {
            console.log("...studying...");
        }
    }
}

// class Slacker implements Learner {
//     name = "Rocky"
// }

// class estudante implements Learner {
//     name;
//     study(hours) {
        
//     }
// }