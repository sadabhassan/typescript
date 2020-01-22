//with callback
import input from "readline";

async function third(callback: Function) {
    await setTimeout(() => {
        console.log(1);
    }, 500);
    callback();
    return true;
}

function four() {
    console.log(2);
}
third(four);
let stdInput = process.stdin;
let sum = (x: number, y: number) => x + y;
console.log(sum(10, 30));

const readline = input.createInterface({
    input: process.stdin,
    output: process.stdout
})

readline.question("What's your name?", (name: string) => {
    console.log(`Hi ${name}!`)
    readline.close()
});