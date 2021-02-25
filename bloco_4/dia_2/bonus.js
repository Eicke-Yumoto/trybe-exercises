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
console.log("Qual o maior valor?")

var maior = 0;
for (var index3 = 0; index3 < numbers.length; index3 += 1) {
   if ( numbers[index3] > maior ) {
      maior = numbers[index3];
   }
}
console.log(maior)

console.log("Quantos valores ímpares existem na array?")

for (var index3 = 0; index3 < numbers.length; index3 += 1) {
    if (numbers[index3] / 2 == 0) {
        console.log[numbers[index3]]
    } 
}