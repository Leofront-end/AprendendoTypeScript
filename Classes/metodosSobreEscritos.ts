class GradeCounter {
    countGrades(grades: string[],letter: string) {
        return grades.filter(grade => grade === letter).length
    }
}

class FailureCounter extends GradeCounter {
    countGrades(grades: string[]) {
        return super.countGrades(grades, "F")
    }
}

// class AnyFailureChecker extends GradeCounter {
//     countGrades(grades: string[]){
//         return super.countGrades(grades, "F") !== 0;
//     }
// }

// const counter: GradeCounter = new AnyFailureChecker()
// const count = counter.countGrades(["A","C","F"])