class BothLonger<OnInstance> {
    instanceLog(value: OnInstance) {
        console.log(value);
        return value
    }

    static staticLog<OnStatic> (value: OnStatic) {
        // let fromInstance: OnInstance;

        console.log(value);
        return value
    }
}
const logger = new BothLonger<number[]>
logger.instanceLog([1,2,3])

BothLonger.staticLog([false,true])

BothLonger.staticLog<string>("You can't change the music of your soul.")