class Assignament {
    grade?: number
}

class gradedAssigment extends Assignament {
    grade: number;

    constructor ( grade: number) {
        super()
        this.grade = grade;
    }
}

class NumericGrade {
    value = 0
}

// class VagueGrade extends NumericGrade {
//     value = Math.random() > 0.5 ? 1 : "...";
// }

// const instance: NumericGrade = new VagueGrade()

// instance.value