// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat (name){
    cats.push(name)
}

function destructivelyPrependCat (name){
    cats.unshift(name)
}

function destructivelyRemoveLastCat(){
    cats.pop()
}

function destructivelyRemoveFirstCat(){
    cats.shift()
}

function appendCat(name){
   const newCats = [ ...cats, name]
    return newCats
}

function prependCat(name){
    const newnewCats = [name, ...cats]
    return newnewCats
}

function removeLastCat (){
    const copyOfCatsRemoveLastCatSlice = (cats.slice(0,-1))
    return copyOfCatsRemoveLastCatSlice
}

function removeFirstCat(){
    const copyOfCatsRemoveFirstCatSlice = (cats.slice(1))
    return copyOfCatsRemoveFirstCatSlice
}