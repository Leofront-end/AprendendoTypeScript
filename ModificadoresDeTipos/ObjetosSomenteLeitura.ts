function describePreference(preference: "maybe" | "no" | "yes") {
    switch (preference) {
        case "maybe": return "I suppose ..."
        case "no": return "No thanks"
        case "yes": return "Yes please"
    }
}

const preferenceMutable = {
    movie: "maybe",
    standup: "yes"
}

// describePreference(preferenceMutable.movie)

preferenceMutable.movie = "no"

const preferenceReadOnly = {
    movie: "maybe",
    standup: "yes"
} as const

describePreference(preferenceReadOnly.movie)

// preferenceReadOnly.movie = 'no'