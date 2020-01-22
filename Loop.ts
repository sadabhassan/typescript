
let arr4: number[] = [10, 20, 30, 40, 50];
// for..of loop
for (const val of arr4) {
    console.log(val);
}

//for..in loop
for (const val in arr4) {
    console.log(val);
    if (arr4.hasOwnProperty(val)) {
        const element = arr4[val];
        console.log(element);
    }
}