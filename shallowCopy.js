// shallow copy
let employee = {
    eid: "E102",
    ename: "Jack",
    eaddress: {city: "Delhi"},
    salary: 50000,
};
console.log("Employee =>", employee);

let newEmployee = {...employee};
console.log("New Employee =>", newEmployee);
console.log("---After Modification---");
newEmployee.eaddress.city = "Ghaziabad";
console.log("Employee =>", employee);
console.log("New Employee =>", newEmployee);


// Deep Copy
