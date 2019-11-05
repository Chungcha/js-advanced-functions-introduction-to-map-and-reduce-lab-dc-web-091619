// Your code here

function mapToNegativize (array){
    let newArr = []
    for (let i=0;i<array.length;i++){
        newArr.push(array[i]*-1)
    }
    return newArr
}

function mapToNoChange(array){
    let newArr = []
    for (let i=0;i<array.length;i++){
        newArr.push(array[i])
    }
    return newArr
}

function mapToDouble(array){
    let newArr = []
    for (let i=0; i<array.length;i++){
        newArr.push(array[i]*2)
    }
    return newArr
}

function mapToSquare(array){
    let newArr = []
    for (let i=0; i<array.length;i++){
        newArr.push(array[i]*array[i])
    }
    return newArr
}

function reduceToTotal(sourceArray, startingPoint = 0){
    let total = startingPoint
    for (let i=0; i<sourceArray.length;i++){
        total+=sourceArray[i]
    }
    return total
}

function reduceToAllTrue(sourceArray){ 
    for (let i=0; i<sourceArray.length;i++){
        if (sourceArray[i] == false){
            return false
        }
    }
    return true
}

function reduceToAnyTrue (sourceArray){
    for (let i=0; i<sourceArray.length;i++){
        if (sourceArray[i]==true){
            return true
        }
    }
    return false
}