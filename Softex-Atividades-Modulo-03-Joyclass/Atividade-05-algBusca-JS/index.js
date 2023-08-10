
// A melhor opção seria usar a busca linear para encontrar
// o valor 20, pois o array não está ordenado

function linearSearch (list, number){
    for(let i = 0; i < list.length; i++) {
        if (list[i] === number){
            return i
        }
    }
    return -1
}
let numberList =[15, 8, 10, 25, 12, 30, 5, 20, 18, 7]
let number = 20

let result = linearSearch (numberList, number)
if (result !== -1) {
    console.log(`Numero encontrado na posiçao ${result}`)
} else {
    console.log("Numero não encontrado na lista")
}