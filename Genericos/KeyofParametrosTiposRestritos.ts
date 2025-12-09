function get<T> (container: T, key: keyof T) {
    return container[key]
}

const roles = {
    favorite: "Fargo",
    others: ["Almoust Famous","Burn After Reading","Nomadland"]
}

const favorite = get(roles, "favorite")
const others = get(roles, "others")

// const missing = get(roles, "extras")