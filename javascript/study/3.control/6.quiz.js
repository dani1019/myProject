let num = 2;
let emoji;

//even →　👍 odd → 👎
if(num % 2 == 0){
    emoji = '👍';
}else{
    emoji = '👎'
};

console.log(emoji);

let emoji2 = num % 2 === 0 ? '👍' : '👎';
console.log(emoji2);

