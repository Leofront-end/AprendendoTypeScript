class Teacher2 {
    teach() {
        console.log("The surest test of discipline is its absence.");
    }
}

class StudentTeacher extends Teacher2 {
    learn(){
        console.log("I cannot afford the luxury of a closed mind.");
    }
}

const teacher2 = new StudentTeacher();
teacher2.teach()
teacher2.learn()

// teacher2.other()