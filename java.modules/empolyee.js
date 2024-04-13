export class Employee{
    static #name="anto";
    static #salary="500";
    static set empolyeeSalay(salaary){
        Employee.#salary = salaary;
    }
    static get empolyeeSalay(){
        return Employee.#salary
    }
    printName(){
        console.log(Employee.#name)
    }
}
export let num = '10';
export let num2 = '20';
export let num3 = '1';

export function test (){
    console.log('Testing');
}