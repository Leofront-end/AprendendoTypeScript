abstract class School {
    readonly name: string;

    constructor (name: string) {
        this.name = name
    }

    abstract getStudentsTypes(): string[]
}

class Preschool extends School {
    getStudentsTypes() {
        return ["preschooler"]
    }
}

// class Absence extends School{}
let school: School

school = new Preschool("Sunnyside Daycare")

// school = new School("Sunnyside Daycare")