//Calculate the age if the date of birth is 28-02-1992
function calculateAge(dob: string): number {
    let currentDate: Date = new Date();
    let dobDate: Date = new Date(dob);
    let age = currentDate.getFullYear() - dobDate.getFullYear();
    let month = currentDate.getMonth() - dobDate.getMonth();
    if (month < 0 || month === 0 && currentDate.getDay() < dobDate.getDay()) {
        age--;
    }
    return age;
}
console.log("your age is " + calculateAge("1992-02-28"));



