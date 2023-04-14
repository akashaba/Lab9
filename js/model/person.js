// Lab 9
// Question 1

class Person{
    name
    dateOfBirth
    constructor(name, dob){
        this.name=name
        this.dateOfBirth=new Date(dob).toISOString().slice(0,10)
    }

    get getName(){
        return this.name
    }
    set setName(value){
        this.name = value
    }

    get getDateOfBirth(){
        return this.dateOfBirth
    }
    set setDateOfBirth(date){
        this.dateOfBirth = new Date(date)
    }
    toString(){
        return `Name: ${this.name}, Date Of Birth: ${this.dateOfBirth}`
    }
}

export { Person }