class FieldTrip {
    destination: string;

    constructor (destination:string) {
        this.destination = destination;
        console.log(`We're going to ${this.destination}`);
        
        // this.nonexist = destination
    }
}

const trip = new FieldTrip("planetarium")

trip.destination

// trip.nonexist