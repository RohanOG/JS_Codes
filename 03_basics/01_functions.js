function sayMyName() {
    console.log("Rohan");
    console.log("Dutta");
}
// sayMyName();

function AddNumbers(num1, num2) {
    return num1 + num2
}

const result = AddNumbers(3, 4);
// console.log(result);

function jobseeker(username) {
    if (!username) {
        return "Please enter a name"
    }

    return `${username} get this job for sure`
}
// console.log(jobseeker("Rohan"));

// While making code for cart adding and pricing and all, we don't know that how many arguments
//or parametrs we r gonna get so We use a specific Operatore known as "REST OPERATOR"

function CalculatePrice(...one) {
    return one
}
// console.log(CalculatePrice(200, 400, 600)); // this is the way we can store as many
// input values using a function and using a REST operator...

const user = {
    name: "Rohan",
    price: 20000

}
function getDetails(anyObject) {
    console.log(` Username is ${anyObject.name} he bought the items for ${anyObject.price}`);

}
getDetails(user)