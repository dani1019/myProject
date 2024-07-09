//function name()
// let add = function (a, b){
//     return a + b;
// }

add = (a, b) => {
    return a + b
};
add2 = (a, b) => a + b
console.log(add2(1, 2));

//IIFE (Immediately-Invoked Function Expressions)
(function run(){
    console.log('😀');
})();