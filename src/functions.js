function makeCamelCase(str) {
    const arrayFromString = str.split('')
    const arrayAfterProccess = []
    arrayFromString.forEach((element, index, array) => {
        if (element !== ' '){
            arrayAfterProccess.push(element)
        } else{
            array[index + 1] = array[index + 1].toUpperCase()
        }
    })
    arrayAfterProccess[0] = arrayAfterProccess[0].toLowerCase()
    const stringFromArray = arrayAfterProccess.join('')
    return stringFromArray
}

module.exports = {
    makeCamelCase
}