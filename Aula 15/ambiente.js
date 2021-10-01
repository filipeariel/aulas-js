let num1 = [5, 8, 2, 9, 3]
num1.push(1)
num1.sort()
console.log(num1)
console.log(`O vetor tem ${num1.length} posições`)
console.log(`O primeiro valor do vetor é ${num1[0]}`)
let pos = num1.indexOf(4)
if (pos == -1) {
    console.log(`O valor não foi encontrado`)
} else {
    console.log (`O valor 8 está na posição ${pos}`)
}
