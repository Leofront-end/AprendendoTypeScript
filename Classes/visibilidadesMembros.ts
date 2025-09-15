class base {
    isPublicImplicit = 0;
    public isPublicExplicit = 1;
    protected isProtected = 2;
    private isprivate = 3;
    #truePrivate = 4;
}

class subClass extends base {
    example () {
        this.isPublicImplicit;
        this.isPublicExplicit;
        this.isProtected;

        // this.isprivate;

        // this.#truePrivate;
    }
}

new subClass().isPublicImplicit;
new subClass().isPublicExplicit;

// new subClass().isProtected;

class TwoKeywords {
    private readonly name: string;

    constructor() {
        this.name = "Leonardo"
    }

    log() {
        console.log(this.name)
    }
}

const two = new TwoKeywords();

// two.name = "Leo2"