// simple class example
class Square {
    constructor(side) {
        this.side = side
    }

    get area() {
        return this.side * this.side
    }

    get perimeter() {
        return 4 * this.side
    }

    set changeSide(side) {
        this.side = side
    }
}

class Person {
    constructor(name, age, job) {
        this.name = name
        this.age = age
        this.job = job
    }

    changeIdentity(name, age, job) {
        this.name = name
        this.age = age
        this.job = job
    }
}

class Employee extends Person {
    constructor(name, age, job, salary) {
        super(name, age, job)
        this.salary = salary
    }

    updateSalary(salary) {
        this.salary = salary
    }

    calculateRetirementPeriod() {
        return 60 - this.age
    }
}


const square1 = new Square(5)
const gibran = new Person("Gibran", 20, "Blockchain Engineer")
const joni = new Employee("Joni", 23, "Office Boy", 23000)

//get object`s properties 
// console.log(gibran.name)
// console.log(gibran.age)
// console.log(gibran.job)
//call object`s method
// console.log("square area:", square1.area)
// console.log("square perimeter:", square1.perimeter)
// square1.changeSide(7)
// square1.changeSide = 7
// console.log("square perimeter (after update):", square1.area)
// gibran.changeIdentity("fadhil", 14, "Student")
// console.log(gibran)
console.log(joni)
console.log(joni.salary)
console.log(joni.updateSalary(30000))
console.log(joni)








