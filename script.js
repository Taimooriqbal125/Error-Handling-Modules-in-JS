// throw is use to make custom error its syntax is throw "  "  throw syntaxerror ("hshshs")

// let employs = ["ali", "kamran","janat","hamza","mohid" ,28];
// if(typeof employs != "string"){
//     throw "not valid"
// }


// try , catch , finally 
// try  { any code full of code}
// catch(error){ any console like    console.log(error)}
// finally{ most use in functions like in return the script will reverce but not in finaly }

try{
    let cars = {
        name : "audi",
        color : "blue"
    }
       console.log(cars.color);
    }catch(error){
    console.log(error)
}





import { Students, people } from "./abc.js";

let studentss = new Students("ali", 23)

studentss.names();
console.log(people);
console.log(Object.entries(people));
console.log(Object.values(people));



// let studentw = new ("alii", 64);
// studentw.name(); 


// Math Objects hhhhhhhhhhhhhhhh

console.log("math" , Math.random())   
// select random numbers any

console.log("math" , Math.round(9.6));
// round off number 

console.log("ali" ,Math.max(10,30,22));
// to get maximun digit , value

console.log("ali", Math.min(19,-33))
// to get minimum value

console.log("ali", Math.ceil(2,3))
// pt nhi

console.log("ali" , Math.pow(3,3));
// 3 ki power 3 

console.log("ali",Math.sqrt(64))
// get square root

console.log("ali", Math.abs(-3,22));
// always give positive number

// Date and time in js same like math.objects 
let date = new Date();
console.log("Second",date.getSeconds());
// get second 

let m = new Date();
console.log("milisecond", date.getMilliseconds())
// get mili second 

let t = new Date();
console.log("time",date.getTime());
// get time

let f = new Date();
console.log("full",date.setFullYear())

let j = new Date();
console.log("ja",date.getHours())