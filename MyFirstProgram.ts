var msg: any;
msg = "hello world";
console.log(msg);
console.log(typeof msg);

let a: any = {
    name: "Sadab",
    location: "bangalore",
}
console.log(a);
console.log("engineer" in a);
a.engineer = "Test Automation Engineer";
console.log(a);
console.log("engineer" in a);
delete a.name;
console.log("name" in a);
console.log(a);


//Type Assertion


