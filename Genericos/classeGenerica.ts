class Secret<Key, Value> {
    key: Key;
    value: Value;

    constructor(key: Key, value: Value ) {
        this.key = key;
        this.value = value;
    }

    getValue(key: Key): Value | undefined {
        return this.key === key 
            ? this.value
            : undefined;
    }
}

const storage = new Secret(12345,"luggage")
console.log(storage.getValue(1982))