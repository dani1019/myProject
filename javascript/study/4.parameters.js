function add(a = 1, b = 1){
    console.log(a);
    console.log(b);
    console.log(arguments);
    console.log(arguments[0]);
    console.log(arguments[1]);
}

add(2, 2)

//Rest paramter
function sum(a,b,...numbers){
    console.log(numbers);
    console.log(a);
    console.log(b);
}

sum(1, 2, 3, 4, 5, 6)