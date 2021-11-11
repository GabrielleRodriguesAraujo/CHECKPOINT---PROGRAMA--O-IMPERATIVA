var tempoNecessario = null;
const opcaoEscolhida = "pipoca"
const tempoEscolhido = 60

console.log("MENU")
console.log("  ")
console.log("1 - Pipoca - 10 segundos(padrao)")
console.log("2 - macarrão - 8 segundos(padrao)")
console.log("3 - carne - 15 segundos(padrao)")
console.log("4 - feijão - 12 segundos(padrao)")
console.log("5 - brigadeiro - 8 segundos(padrao)")
console.log("  ")

opcaoEscolhida

switch (opcaoEscolhida) {
    case "pipoca":
        tempoNecessario = 10
        break;
    case "macarrão":
        tempoNecessario = 8
        break;
    case "carne":
        tempoNecessario = 15
        break;
    case "feijão":
        tempoNecessario = 12
        break;
    case "brigadeiro":
        tempoNecessario = 8
        break;   
    default:
        console.log("Opcão inexistente !!!!!!!!")
        break;
}

if (tempoNecessario*3 <= tempoEscolhido){
    console.log("Kabumm !!!!")
}
else if (tempoNecessario*2 <= tempoEscolhido){
    console.log("Comida queimou !!!!")
}
else if (tempoNecessario > tempoEscolhido){
    console.log("Tempo insuficiente !!!!")
}
else console.log("Prato pronto, bom apetite !!!!")