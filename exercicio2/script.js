
//Variáveis do exercício 01
const numArray = [12, 35, 27, 54, 43]
console.log(numArray)

const fruitArray = ["uva", "abacate", "maçã", "banana", "tomate"]
console.log(fruitArray)

const mixArray = [73, "faca", 44, "molho", !true]
console.log(mixArray)

//-----------------------------------------------------------------------------

// 1 - Imprima a quantidade de itens de cada array (utilize um console.log()
// para cada impressão); **check**
console.log(numArray.length)
console.log(fruitArray.length)
console.log(mixArray.length)

//-----------------------------------------------------------------------------

// 2 - Imprima o primeiro item do primeiro array, o segundo item do segundo array,
// e o terceiro item do terceiro array; **check**
console.log(numArray[0] , fruitArray[1] , mixArray[2])

console.log(numArray.splice(0, 1))

console.log(fruitArray.splice(1, 1))

console.log(mixArray.splice(2, 2))

//-----------------------------------------------------------------------------

// 3 - Imprima uma informação booleana verdadeira sobre a **inclusão** de um item do
// primeiro array, e uma informação booleana falsa sobre a **inclusão** de um item
// ao terceiro array. Isto é, um `includes()` verdadeiro, e outro falso. **check**

console.log(numArray.includes(27))

console.log(mixArray.includes("salsicha"))