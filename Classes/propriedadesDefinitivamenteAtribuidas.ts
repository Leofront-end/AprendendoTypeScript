class ActivitiesQueue {
    pending!: string[]

    initialize(pending: string[]) {
        this.pending = pending;
    }

    next() {
        return this.pending
    }
}

const activities = new ActivitiesQueue()

activities.initialize(['Eat', 'sleep', 'learn'])
activities.next()