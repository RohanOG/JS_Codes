const myArr = [0, 1, 2, 3, 4, 5]
myArr.push(7, 8, 9)
myArr.pop()
myArr.pop()
//console.log(myArr);
//myArr.shift();
myArr.unshift(9)
console.log(myArr);
console.log(myArr.includes(2));
console.log(myArr.indexOf(9));


const one = 100;
const two = 300;
const thre = 900;
console.log(Array.of(one, two, thre));


//slice only gives that part of array which is mentioned in its function.
// splice cuts out that part of array which is mentioned in that function.
//console.log(myArr[4]);
// const myHEroes = ["Rohan", "Mohan", "Soahn"]
// console.log(myHEroes);