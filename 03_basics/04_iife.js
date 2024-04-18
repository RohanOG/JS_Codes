// Immideatly Invoked Function Expression





(function chai(params) {
    // named IFFE
    console.log("COnnected");
})();

(function chaiTwo(params) {
    console.log("COnnected"); // two IFFE's together...
})();

((name) => {
    //unnamed IFFE
    console.log(`Again Connected ${name}`);
}
)("Nahor")