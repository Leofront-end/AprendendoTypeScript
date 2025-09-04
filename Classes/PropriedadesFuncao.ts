// class withMethod {
//     myMethod() {}
// }

// new withMethod().myMethod() === new withMethod().myMethod()

// class withProperty {
//     myProperty: () => {}
// }

// new withProperty().myProperty() === new withProperty().myProperty()

class withPropertyParameters {
    takeParameters = (input:boolean) => input ? "Yes" : "No"
}

const instance = new withPropertyParameters()

instance.takeParameters(true)

// instance.takeParameters(123)