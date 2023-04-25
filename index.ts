let age: number = 23;

let firstName: string = "Damian"

let isTall: boolean = true; 

let childrensNames : string[] = ["Allah","Rajandrigel"]

if (isTall){
  console.log("and so tall")
  
} else ; console.log("and so pretty")


for (let i:number = 0; i < childrensNames.length; i++){
  console.log(childrensNames[i])
}

enum taxForm {
  standardTaxForm = "1040",
  childTaxForm = "641",
  cryptTaxForm = "420Z",
}

console.log("The crypto one is : ", taxForm)

let zipCode: string | number = "12345"
zipCode = "ABCDE"
// zipCode = true // BAD 
zipCode = 15135
console.log(zipCode)

function sum(x: number, y: number) {
  return x+y
}

console.log(sum(4,5))

let total: number = sum (5,6)

function debug(message:string) : void {
  console.log(message)
}





interface person {
  firstName: string,
  age: number,
  children: string[],
  hasCertificate?: boolean, // question mark allows field to be optional
  random?: any
}

let damian: person = {
  firstName: "me",
  age: 23,
  children: ["a","b"],
  random: null
  // hasCertificate: null,
}

let todd: person = {
  firstName: "todd a",
  age: 43,
  children: [ ]
}

// let damian: person = {
//   firstName: 1,
//   age: 23
// }

debug("hello world")