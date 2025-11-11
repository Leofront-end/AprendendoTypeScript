interface ActingCredit<Role> {
    role: Role;
}

class MoviePart implements ActingCredit<string> {
    role: string;
    speaking: boolean;

    constructor (role: string, speaking: boolean) {
        this.role = role;
        this.speaking = speaking;
    }
}

const part = new MoviePart("Miranda Priestly", true)
console.log(part.role)

// class IncorrectExtension implements ActingCredit<string> {
//     role: boolean;
// }