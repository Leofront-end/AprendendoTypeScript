let anyValue: any;

anyValue = "Leo"
anyValue = 123

console.log(anyValue );

function greetComedian(name: any) {
    console.log(`Anouncing ${name.toUpperCase()}!`);
}

greetComedian({name: "Leo"})