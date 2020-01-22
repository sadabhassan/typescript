let empName: string = "sadab hassan";
let companyName: string = "InTimeTec";
let designation: string = "Senior Software Engineer";

console.log(empName + " \nworks as \n" + designation + " \nin\n" + companyName);

// Back-ticks strings also known as Template string
console.log(`${empName} work as ${designation} in ${companyName}`);

// String Literal Type

type FruitNames = "Apple" | "Orange" | "Guava";
function showFruitNames(name: FruitNames): void {
    console.log(name);
}

showFruitNames("Apple");