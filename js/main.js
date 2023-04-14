import { Person } from "./model/person.js";
import { Employee } from "./model/employee.js";

let person1 = new Person('Ana Smith', new Date(1998,11,15))
let person2 = new Person('Bob Jone', new Date(1945,10,16))
let person3 = new Person('Carlos Slim Helu', new Date(1976,8,24))

let arrPesron = [person1, person2, person3]
arrPesron.forEach((p)=>{
    console.log(p.toString())
})

let emp1 = new Employee('Jim Hanson', new Date(1989,6,14), '245.990.00', new Date(2022,10,29))
console.log(emp1.doJob('Software Engineer'))
console.log(emp1)