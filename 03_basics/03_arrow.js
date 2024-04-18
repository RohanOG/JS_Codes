const user = {
    name: "Rohan",
    price: 999,
    welcomeMessage: function (params) {
        console.log(`${this.name},Welcome to youtube`);
    }
}
user.welcomeMessage()
user.name = "Mohan"
user.welcomeMessage()
// we cant use "this" in functions directly...
// "this ois used very easily pnly in an object"


const add = (num1, num2) => {
    return num1 + num2
}
// console.log(add(3, 4));
//  using "ARROW FUNCTION HERE"

// --------------------------*********-----****-------****--
// Another method by which we can use "ARROW METHOD"...
const addAnother = (num1, num2) => num1 + num2
console.log(addAnother(4, 65));