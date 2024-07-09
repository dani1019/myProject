//conditional statement
let day = 0;
let dayName;

switch(day){
    case 0:
        dayName = 'Monday';
        //break;
    case 1:
        dayName = 'Tuesday';
        break;
    case 2:
        dayName = 'Wednesday';
        break;
    case 3:
        dayName = 'Thursday'
};

console.log(dayName);

let condition = 'bad2';

switch(condition){
    case 'okay':
    case 'good':
        text = 'yoshi';
        break;
    case 'bad':
        text = 'warui';
        break;
    default:
        text = 'not exist';
}

console.log(text);