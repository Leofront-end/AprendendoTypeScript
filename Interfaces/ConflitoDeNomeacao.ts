interface MergedProperties {
    same: (input: boolean) => string;
    different: (input: string) => string;
}

// interface MergedProperties {
//     same: (input: boolean) => string;
//     different: (input: number) => string
// }

interface MergedMethods {
    different(input: string): string;
}

interface MergedMethods {
    different(input: number): string;
}