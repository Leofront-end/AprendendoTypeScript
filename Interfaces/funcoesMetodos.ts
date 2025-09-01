interface hasBothFunctionTypes {
    property?: () => string;
    method?(): string;
} 

const hasBoth2: hasBothFunctionTypes = {
    property: () => "",
    method() {
        return ""
    },
}

// hasBoth2.property()
// hasBoth2.method()