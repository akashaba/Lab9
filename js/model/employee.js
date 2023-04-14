import { Person } from "./person.js"
class Employee extends Person{
    salary
    hireDate
    constructor(name, dob, salary,  hireDate){
        super(name, dob)
        this.salary=salary
        this.hireDate=hireDate.toISOString().slice(0,10)
    }

    doJob(title){
        return `${this.getName} is a ${title} who earns $${this.salary}`
    }
}

export { Employee }