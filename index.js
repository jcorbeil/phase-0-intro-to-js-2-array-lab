const cats = ["Milo","Otis", "Garfield"];

function destructivelyAppendCat(name){
cats.push(name);
}

function destructivelyPrependCat(name){
cats.unshift(name);
}
function destructivelyRemoveLastCat(){
    cats.pop();
}   
function destructivelyRemoveFirstCat(){
    cats.shift();
}

function appendCat(name){
 const allCats = [...cats,name]
 return allCats
}
function prependCat(name){
    const copyOfCats = [name,...cats]
    return copyOfCats
}
function removeLastCat(name){
    const copyOfCats = [...cats]
    return copyOfCats.slice(0,2)
}
function removeFirstCat(name){
    const copyOfCats = [...cats]
    return copyOfCats.slice(1,3)
}