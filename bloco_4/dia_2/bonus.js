let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

console.log("Valores do Array:")

for(index = 0; index < numbers.length; index += 1) {
    console.log(numbers[index])
 }

let soma = 0

for(index = 0; index < numbers.length; index += 1) {
    soma += numbers[index]
}

console.log()
console.log("Soma dos valores:")
console.log(soma)

console.log()
console.log("Média aritmética dos valores:")

console.log(soma/numbers.length)

console.log()

console.log("O valor é maior ou menor que 20?")

if(soma/numbers.length > 20) {
    console.log("Valor maior que 20")
} else {console.log("Valor menor que 20")}

console.log()
console.log("Qual o maior valor da array?")

var maior = 0;
for (var index2 = 0; index2 < numbers.length; index2 += 1) {
   if ( numbers[index2] > maior ) {
      maior = numbers[index2];
   }
}
console.log(maior)

console.log("Quantos valores ímpares existem na array?")

let impares = 0

for (let index3 = 0; index3 < numbers.length; index3 += 1) {
    if (numbers[index3] % 2 == 0) {
        impares + 0
    } else {impares += 1}
} 
 if (impares > 0) {
     console.log(impares)
 } else {"nenhum valor ímpar encontrado"}

 console.log()

 console.log("Qual o menor valor da array?")
let menor = 100 ** 100
 for (let index4 = 0; index4 < numbers.length; index4 += 1) {
    if ( numbers[index4] < menor )
        menor = numbers[index4];
 }
 console.log(menor)

 console.log("Nova array:")

 let Numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ,11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];

 console.log("Nova array dividida por dois:")

 for(let index5 = 0; index5 < Numbers2.length; index5 += 1) {
     console.log(Numbers2[index5] / 2)
 }
