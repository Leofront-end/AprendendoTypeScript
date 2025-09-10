class Leasson {
    subject: string;

    constructor (subject: string) {
        this.subject = subject;
    }
}

class onlineLeasson extends Leasson {
    url: string;

    constructor(subject: string, url: string) {
        super(subject)
        this.url = url
    }
}

let leasson: Leasson
leasson = new Leasson("Coding")
leasson = new onlineLeasson("coding","orreilly.com")

let online: onlineLeasson;
online = new onlineLeasson("coding","oreilly.com")

// online = new Leasson("coding")

class PastGrades {
    grades: number[] = []
}

class LabeledPastGrades extends PastGrades {
    label?: string;
}

let subclass: LabeledPastGrades

subclass = new LabeledPastGrades()
subclass = new PastGrades()