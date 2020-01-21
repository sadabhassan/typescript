//declaring array using square brackets

let arr1: string[] = ["Sadab", "Mahendra", "Jitendra"];
arr1.forEach(name => {
    console.log(name);
});

//using genric aaray type

let arr2: Array<string> = ["Sadab", "Mahendra", "Jitendra"];
arr2.push("Ruchi");
arr2.forEach(name => {
    console.log(name);
});
arr2.pop();
arr2.forEach(name => {
    console.log(name);
});



//MultiDimensional Array
let arr3: number[] = new Array(2);
arr3 = [5, 4, 3, 2];
arr3.forEach(num => {
    console.log("test-->" + num);
});
console.log(arr3.length);
arr3.push(1);
console.log(arr3.length);
arr3.forEach(num => {
    console.log("test-->" + num);
});
