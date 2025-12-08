class CreatePairFactory<Key> {
    key: Key;

    constructor(key:Key) {
        this.key = key
    }

    createPair<Value> (value: Value) {
        return {key: this.key, value}
    }
}

const factory = new CreatePairFactory("role")

const numberPair = factory.createPair(10)

const stringPair = factory.createPair("Sophie")