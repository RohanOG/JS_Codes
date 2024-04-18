const regularUSer = {
    email: "Rohan@.com",
    fullname: {
        userfullname: {
            firstName: "Rohan",
            lastName: "Dutta"
        }

    }
}

const user = {
    name: "ROhan",
    age: 22,
    status: "Funny"
}
// console.log(regularUSer.fullname.userfullname.firstName);
// THIS IS HOW WE ACCESS A NESTED OBJECT PATTERN>>>>


// HERE WE ARE TRYING TO MERGING TWO DIFFRNT OBJECTS TOGETHER>>>>
const Object1 = { 1: "a", 2: "b" }
const Object2 = { 1: "a", 2: "b" }
// const obj3 = { Object1, Object2 }
// const obj3 = Object.assign({}, Object1, Object2)-------METHOD--1
// const obj3 = { ...Object1, ...Object2 } //----SPREADING METHOD-2
// console.log(obj3);
// console.log(Object.keys(user));
// console.log(Object.values(user));   // BY These methods we can store differne t values in a form of array....
// console.log(Object.entries(user));
// console.log(user.hasOwnProperty('name'));// by this we can check that mentioned properrty is available in the object or NOT....

const postion = {
    name: "ROhan",
    age: 22,
    status: "Funny"
}

console.log(postion.name);// we can access values by various methos here r some....

const { name: n } = postion //Another way by making specific OBJECT fornsome dedicated value...
console.log(n);
