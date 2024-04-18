var c = 300;

if (true) {
    let a = 10
    const b = 20
    var c = 30
}
// console.log(a);
// console.log(b);
// console.log(c);

function one() {
    const name = "Hitesh"
    function two() {
        const age = 22
        console.log(name, age);

    }
    two()
}
one()
