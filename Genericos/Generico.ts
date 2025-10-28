function identity<T>(input: T) {
    return input
}

identity("abc")
identity(123)
identity({quote: "I think your self emerges more clearly over time."})

let value = identity(42)

const identidade = <T>(input:T) => input
identidade(123)