type functionAlias = (input:string) => number;

interface callSignature {
    (input:string): number;
}

const typedFunctionAlias: functionAlias = (input) => input.length;

const typedCallSignature: callSignature = (input) => input.length;

interface functionWithCount {
    count: number;
    (): void;
}

let hasCallCount: functionWithCount;

function keepsTrackOfCalls() {
    keepsTrackOfCalls.count += 1
    console.log(`I've been called ${keepsTrackOfCalls.count} times!`);
}

keepsTrackOfCalls.count = 0

hasCallCount = keepsTrackOfCalls;

function doesNotHaveCount() {
    console.log('No idea"');
    
}

// hasCallCount = doesNotHaveCount