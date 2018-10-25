// simple class example
class Square {
    constructor(side){
        this.side = side
    }

}

class Person {
    constructor(name,age,job){
        this.name = name
        this.age = age
        this.job = job

    }
}

const square1 = new Square(5)
const gibran = new Person("Gibran",20,"Blockchain Engineer")

console.log(gibran)
