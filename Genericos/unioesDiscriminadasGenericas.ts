type Result<Data> = FailureResult | SuccessfulResult<Data>;

interface FailureResult {
    error: Error;
    succeded: false
}

interface SuccessfulResult<Data> {
    data: Data;
    succeded: true;
}

function handleResult(result: Result<string>) {
    if (result.succeded) {
        console.log(`We did it! ${result.data}`);
    } else {
        console.error(`Awww... ${result.error}`);
    }

    // result.data;
}
