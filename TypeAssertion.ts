/*Type assertion allows you to assign the type of a value and
  tell the compiler not to infer it. */

//Type assertion using angular bracket
let code: any = "123";
let employeeCode: number = <number>code;
console.log(typeof employeeCode); //Output: string

// Type assertion using as keyword

let id: string = "123456";
let empId: number = id as any as number;
console.log("empId-->" + empId);
console.log(typeof empId);

//Type assertion with object
// let employee = {};
// employee.name = "sadab";
// employee.id = 123;


interface Employee {
    name: string;
    id: number;
}

let emp = <Employee>{};
emp.id = 123;
emp.name = "sadab";