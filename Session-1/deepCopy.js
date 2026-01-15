//deep copy

let employee = {
    eid: "E102",
    ename: "John",
    eaddress: "New York",
    salary: 60000,
};

console.log("---Deep copy---");
let newEmployee = JSON.parse(JSON.stringify(employee));
console.log("Employee=> ", employee);
console.log("New Employee=> ", newEmployee);
console.log("---------After modification---------");
newEmployee.ename = "Beck";
newEmployee.salary = 70000;
console.log("Employee=> ", employee);
console.log("New Employee=> ", newEmployee);