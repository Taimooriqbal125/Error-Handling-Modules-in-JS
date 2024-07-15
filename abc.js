
export let people  = {
    name : "audii",
    age : 27,
    citizen : "uk",
    height : "5"
}

export class Students {
    constructor(name ,age) {
        this.name = name
        this.age = age 
        console.log("hello")
    }
    names(){
        console.log(`your name is ${this.name}`)
    }
    age(){
        console.log(`your age is ${this.age}`)
    }
}
