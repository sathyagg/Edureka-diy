// class Employee{
    //feilds
    //methots
    //fun
    // employeeName = 'franklin';   
//     print(name){
//         this.employeeName = name;
//         console.log(name);
//     }
//     specialPrint(){
//         console.log("specila name " + this .employeeName)
//     }

// }
// let employee = new Employee();
// // employee.employeeName = 'anto';
// employee.specialPrint()
// employee.print('anto');
// //  console.log(employee.employeeName)
//  let emp2 = new Employee();
// //  emp2.employeeName = 'jasmine';
//  emp2.print('jasmine');
// //  console.log(emp2.employeeName);
// class Employee{
//     // name = 'anto'
//     set employeeName (name){
//         this.name= name;
//     }
//     specialPrint(){
//         console.log("special Name -"+ this.name)
//     }
// }
// let employee = new Employee();
// employee.employeeName='Franklin';
// employee.specialPrint();
// console.log(employee.employeeName)

//satatic
class Employee {
    static name ='Anto';
    static salary=500;
    static set sathyaSalry(salary){
        Employee.salary=salary;
    }
    static get sathyaSalry(){
        return Employee.salary;
    }
}
console.log(Employee.sathyaSalry)