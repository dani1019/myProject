function add(num1, num2){
    return num1 + num2;
};
const result = add(5,5);
console.log(result);

//example
// let lastName = 'Kim';
// let firstName = 'JiSoo';
// let fullName = `${lastName} ${firstName}`;

// console.log(fullName);

function fullName(lastName, firstName){
    return `${lastName} ${firstName}`;
}
const result2 = fullName('kim','jisoo');
console.log(result2);