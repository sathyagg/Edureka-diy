// let student = {
//     firstName: "Anbu",//data prooerty
//     lastName: "selvan",
//      fullName:() =>`${student.firstName}${student.lastName}`,
//         // 1.return student.firstName + " " + student.lastName
//     //2. return `${student.firstName}    ${student.lastName}`//object use panna method
//      //improve 

//     // }
// };


// // 1.console.log(student.firstName +  " " + student.lastName)
// console.log(student.fullName());
//GETER AND SETTERS(access property)
let student ={
    firstName: "anbu",
    lastName: "selvan",
    get fullName() {
        return `${student.firstName} ${student.lastName}`;
    },
    set fullName(value){
        let values=value.split(" "); 
        this.firstName=values[0];
        this.lastName=values[1]  ?? "";

    }

};
student.fullName ="sathya"
console.log(student.fullName);
//getter&setter property tha (access propery)
//data property tha object kottukkira property and value tha (data pro)