// throw is use to make custom error its syntax is throw "  "  throw syntaxerror ("hshshs")

let employs = ["ali", "kamran","janat","hamza","mohid" ,28];
if(typeof employs != "string"){
    throw "not valid"
}


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



let studentw = new ("alii", 64);
studentw.name(); 