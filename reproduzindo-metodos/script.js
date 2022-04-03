//1. ForEach

function newForEach (array, callback) {
    for(let i = 0; i < array.length; i++) {
        callback(array[i], i,array)
    }
}


//2. Map

function newMap (array, callback) {
    let newArray = []
    for(let i = 0; i < array.length; i++) {
        const call = callback(array[i], i, array)
        newArray.push(call)
    }
    return newArray
}


//3. Filter
function newFilter (array, callback) {
    let newArray = []
    for(let i = 0; i < array.length; i++) {
    const call = callback(array[i], i, array)
        if (call) {
            newArray.push(array[i])
        }
    }
    return newArray
}


//4. Find
function newFind (array, callback) {
    for (let i = 0; i < array.length; i++) {
        const call = callback(array[i], i, array)
        if(call) {
            return array[i]
        }
    }
}


//5. findIndex
function newFindIndex (array, callback) {
    for (let i = 0; i < array.length; i++) {
        const call = callback(array[i], i, array)
        if(call) {
            return i
        } 
    }
    return -1
}



//6. Reduce
function newReduce (array, callback, valorInicial) {
    let result 
    if(valorInicial !== undefined){
        result = callback(valorInicial,array[0], 0, array)
    } else {
        result = array[0]
    }
    for (let i = 1; i < array.length; i++) {
        result = callback(result,array[i], i, array)
    }
    return result
}

//7. Some 
function newSome (array, callback) {
    for(let i = 0; i < array.length; i++) {
    const call = callback(array[i], i, array)
        if (call) {
            return true
        } 
    }
    return false
}

//8. Every
function newEvery (array, callback) {
    for(let i = 0; i < array.length; i++) {
    const call = callback(array[i], i, array)
        if (!call) {
            return false
        } 
    }
    return true
}


//9. Fill
function newFill (array, valor) {
    for(let i = 0; i < array.length; i++) {
        let novoValor = valor
        array[i] = novoValor
    }
}


//10. Includes 
function newIncludes (array, elemento) {
    for(let i = 0; i < array.length; i++) {
        if (array[i] === elemento) {
            return true
        } 
    }
    return false
}


//11. indexOf
function newIndexOf (array, elementoPesquisa, pontoInicial= 0) {
    for (let i = pontoInicial; i < array.length; i++) {
        if(array[i] === elementoPesquisa) {
            return i
        } 
    }
    return -1
}


//12. Concat
function newConcat (...array) {
    const novoArray = []
    for(let i = 0; i < array.length; i++) {
        if(Array.isArray (array[i])){
            for(let j = 0; j < array[i].length; j++) {
                novoArray.push(array[i][j])
            }
        } else {
            novoArray.push(array[i])
        }
    }
    return novoArray
}


//13. Join
function newJoin (array, separador = ',') {
    let string = ''
    for(let i = 0; i < array.length; i++) {
        if (i !== array.length -1) {
            string = string + array[i] + separador
        } else {
            string = string + array[i] 
        }
    }
    return string
}
