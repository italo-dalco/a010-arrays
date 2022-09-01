
//Arrays Originais

const numArray = [12, 35, 27, 54, 43]
console.log(numArray)

const fruitArray = ["uva", "abacate", "maçã", "banana", "tomate"]
console.log(fruitArray)

const mixArray = [73, "faca", 44, "molho", !true]
console.log(mixArray)

//------------------------------------------------------------------------

// Agora, vamos manipular os arrays, adicionando ou removendo informações.
// Para isso, crie **três** novos arrays, chamados `nomeDoArrayOriginalCopia`,
// e faça o que se pede abaixo nas cópias dos arrays originais;

const numArrayCopy = numArray.slice()
console.log(numArrayCopy)

const fruitArrayCopy = fruitArray.slice()
console.log(fruitArrayCopy)

const mixArrayCopy = mixArray.slice()
console.log(mixArrayCopy)

//-------------------------------------------------------------------------

// - Adicione um item `number` ao primeiro array. Utilize `console.log()`
// para exibir o original e a cópia;

numArray.push(98)
console.log(numArray , numArrayCopy)

//-------------------------------------------------------------------------

// - Remova o último item do segundo array. Utilize `console.log()`
// para exibir o original e a cópia;

fruitArray.pop()
console.log(fruitArray , fruitArrayCopy)

//-------------------------------------------------------------------------

// - Remova o segundo item do terceiro array. Utilize `console.log()`
// para exibir o original e a cópia;

mixArray.splice(1, 1)
console.log(mixArray , mixArrayCopy)