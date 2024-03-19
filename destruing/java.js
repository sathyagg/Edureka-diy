//array
const names = ['undefined','pavi','lakshmi'];
 const [name1="default Name",...[name2]] = names;
 console.log(name1);
//  console.log(name2);
 console.log(name2);
 // object
 const employee ={
    firstName:'sathya',
    lastName:'auto',
    age :32,
    isMajor:true
 }
 const{firstName} = employee;
 console.log(employee.firstName)
 console.log(firstName)
 //neast ob
 const employee1 ={
    name:{firstName1:'sathya',
    lastName:'auto',
 },
    age :32,
    isMajor:true,
 }
 const {name:{firstName1} }= employee1;
 console.log(employee1.name.firstName1)
 console.log(firstName1)

 let a = 10;
 let b = 20;

//  let arr = [a,b];
//  [b,a] = arr;
 [b,a] = [a,b];
//  console.log(arr)
 console.log(a,b)

//function in arrey
function calculate(a,b) {
   const add = a+ b;
   const sub = a-b;
    const nul = a*b;
    return [add,sub,nul];
 }
 const [add1,sub2,nul3] = calculate(10,20);//entha varname access
 console.log(add1)
 console.log(sub2)
 console.log(nul3)
   //fuction in object
 function calculate1(a,b) {
   const add = a+ b;
   const sub = a-b;
    const nul1 = a*b;
    return {add,sub,nul1};
 }
 const ans = calculate1(10,20);//entha varname access
 console.log(ans)
 //arrey mix in object
 const employees = [
   {name:'pavi',age: 24},
   {name:'lakshmi',age:25},
 ];
//  [emp1]=employees;
//  console.log(emp1)
// [emp1,emp2] = employees;
// console.log(emp1)
// console.log(emp2)
// [{name}] = employees 
// console.log(name)
// [ {name},{name}] = employees;//(eppadi kottuthal age 25 print akum)
// console.log(name)
[ {age:name1Age},{age:name2Age}] = employees; //EPPO TWO AGE IS PRINTED (RESTRUING)
console.log(name1Age)
console.log(name2Age)

//Simle formate for arrey & object
const worker = {
   company1: ['kumareshwari','sathya'],
   company2: ['lakshmi','pavi']
}
const {company1: [name3],company2:[name4]}= worker;
console.log(name3)
console.log(name4)








 
   
