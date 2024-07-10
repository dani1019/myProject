//주어진 숫자만큼 
//5, 순회하는 숫자를 다 출력하고 싶음
//5, 순회하는 숫자의 두배값을 다 출력하고 싶음
//function iterate(max, action)

function iterate(max, action){
    for(let i = 0; i < max; i++){
        action(i)
    }
}

function log(num){
    console.log(num);
}

function doubleAndLog(num){
    console.log(num*2);
}

// iterate(5, log);
iterate(5, (num) => console.log(num));
iterate(5, (num) => console.log(num * 2));
// iterate(5, doubleAndLog);

setTimeout(()=>{
    console.log('after one second');
}, 1000);
