class GradeAnnouncer {
    message: string;

    constructor (grade: number) {
        this.message = grade <= 65 ? "Maybe next time..." : "You pass!"
    }
}

class passingAnouncer extends GradeAnnouncer {
    constructor () {
        super(100)
    }
}

// class FailingAnnouncer extends GradeAnnouncer {
//     constructor () {}
// }

class GradesTally {
    grades: number [] = []

    addGrades(...grades: number[]) {
        this.grades.push(...grades)
        return this.grades.length
    }
}

// class ContinuedGradesTally extends GradesTally {
//     constructor (previousGrades: number [] {
//         this.grades = [...previousGrades]

//         super()

//         console.log("Starting with length", this.grades.length);
        
//     })
// }