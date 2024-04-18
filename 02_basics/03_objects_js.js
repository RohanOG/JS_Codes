//Making object

//object can be made by two different styles in
// javascript one is using CONSTRUCTOR and another is using
// LITERALS....

// WE WILL BE MAKING OBJECT USING LITERALS>>>>
const mySym = Symbol("my key")

const userInfo = {
    name: "Rohan",
    [mySym]: "my Key",
    age: 22,
    location: "BIHAR",
    email: "ROHAN@GMAIL>COM",
    isLoggedIn: false
}
// userInfo.email = "ROHAN@@@@@MAIL.com"
// Object.freeze(userInfo);// freezing the object means nothing can be chanf=ged further
// userInfo.email = "HELLO@ROHAN>COM"
// console.log(userInfo);
// console.log(userInfo.name);
// console.log(typeof userInfo[mySym]);
userInfo.greeting = function () {
    console.log("HEllo user");
}
console.log(userInfo.greeting());
userInfo.greetingTwo = function () {
    console.log(`hello js User,${this.name}`);

}
console.log(userInfo.greetingTwo());
