interface graded {
    grades: number[]
}

interface reporter {
    report: () => string
}

class ReportCard implements reporter, graded {
    grades: number[];

    constructor(grades: number[]) {
        this.grades = grades;
    }

    report() {
        return this.grades.join(', ')
    }
}

// class Empty implements graded,reporter {

// }

interface ageIsNumber {
    age: number;
}

interface ageIsNotNumber {
    age: () => string
}

// class AsNumber implements ageIsNotNumber,ageIsNumber {
//     age = 0
// }

// class NotAsNumber implements ageIsNotNumber, ageIsNumber {
//     age() { return "" }
// }