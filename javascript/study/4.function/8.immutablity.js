function displayObj(obj){
    console.log(obj);
}

const ellie =  {name: 'ellie'}
displayObj(ellie)

function changeName(obj){ //make a name to know easily
    return {...obj, name: 'Bob'};
}