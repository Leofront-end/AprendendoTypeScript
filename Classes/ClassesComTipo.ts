class Teacher {
    sayHello() {
        console.log("Take chances,make mistake, get missy!");
    }
}

let teacher : Teacher

teacher = new Teacher()

// teacher = "Wahoo!"

class schoolBus {
    getAbilities () {
        return ["magic", "shapeshifting"]
    }
}

function withSchoolBus(bus: schoolBus) {
    console.log(bus.getAbilities);
}

withSchoolBus(new schoolBus())

withSchoolBus({
    getAbilities: () => ["transmografication"]
})

// withSchoolBus({
//     getAbilities: () => 123
// })