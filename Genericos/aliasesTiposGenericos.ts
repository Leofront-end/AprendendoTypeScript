type Nullish<T> = T | null | undefined

type createsValue<Input,Output> = (input: Input) => Output

let creator: createsValue<string,number>

creator = text => text.length

// creator = text => text.toUpperCase()