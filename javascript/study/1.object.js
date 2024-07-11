//object literal
//new Object
//Object.create()
//key
//value

let apple = {
    name: 'apple',
    'hello-bye': '😀',
    0: 1,
    ['hello-bye1'] : '😀'
}

apple.name; //dot notation
console.log(apple['hello-bye1']); //bracket notation
apple['name'];

//add property
apple.emoji = '🍎';
console.log(apple.emoji);
console.log(apple['emoji']);

//delete property
delete apple.emoji;
console.log(apple);
