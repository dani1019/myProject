const obj = {
    name : 'ellie',
    age : 20,
};

obj.name;
obj.age;

function getValue(obj, key){
    return obj[key];
}
//console.log(obj);
// console.log(getValue(obj,'name'));

function addKey(obj, key, value){
    obj[key] = value
};

addKey(obj, 'job', 'engineer');
//console.log(obj);

function deleteKey(obj, key){
    delete obj[key];
}

console.log(obj);
deleteKey(obj,'name')
console.log(obj);