let string = "Hello";
string = `Hello!`;
console.log(string);
string = "'Hello'";
console.log(string);

string = 'Hello!\nEliia!'
console.log(string);

string = 'Hello!\nEllie!\t\tmy name is\\'
console.log(string);

let id = 'ellie';
let greetings = "'Hello!,'" + id + "😀\nhave a good day!"

console.log(greetings)

greetings = `'Hello, ${id}
have a good day!'`

console.log(greetings)

let isEnrolled = true;
console.log(isEnrolled);

//Falshy
console.log(!0);
console.log(!!0);
console.log(!!-0);
console.log(!!'');
console.log(!!null);
console.log(!!undefined);
console.log(!!NaN);
console.clear

//Truthy 
console.log(!!1);
console.log(!!-1);
console.log(!!-'text');
console.log(!!-{});
console.log(!!Infinity);