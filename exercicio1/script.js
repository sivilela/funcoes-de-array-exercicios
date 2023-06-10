const infosPessoa = {
    nome: "astrodev",
    profissao: "Dev das estrelas",
    username: "astrodev_labenu",
    senha: "melhorDeTodos"
}

// Rafael Simas
// questão 1
const caixaAlta = (objeto) => {
    let novoObjeto = {}
    for (let i in objeto){ // o "i" é o indice do objeto
        novoObjeto[i] = objeto[i].toUpperCase()
        // eu acesso o novo objeto na posição inicial = transformo a posição inicial do meu objeto em CAIXA ALTA
    }
    return novoObjeto
}
//console.log(caixaAlta(infosPessoa))


// questão 2
// const questaoDois = objeto => {
//     let textoCorrido = ''
//     //transforma a variável em uma string
//     for(let i in objeto){ // for .. in percorre toda a propriedade do objeto
//         let valor = objeto[i] // crio uma variável para armazenar as informações
//         let propriedade = [i] // "i" = propriedade, ou parte inicial && objeto[i] = ...
//         textoCorrido += `O valor da propriedade ${propriedade} é ${valor}.\n`
//     }
//     return textoCorrido
// }
//console.log(questaoDois(infosPessoa))

// ou assim
const questaoDois = (objeto) => {
    let textoCorrido = ``
    // transforma a variável em uma string
    for(let i in objeto){ // for .. in percorre toda a propriedade do objeto
        textoCorrido += `O valor da propriedade ${i} é ${objeto[i]}.\n`
    }
    return textoCorrido
}
//console.log(questaoDois(infosPessoa));

// questão 3
const funcaoCall = () => {
    let timesRj = {
        time1: `Flamengo`,
        time2: `Vasco`,
        time3: `Fluminense`,
        time4: `Botafogo`
    }
    return timesRj
}
// console.log(funcaoCall(novoObjeto))

const exercicio3 = (novoObjeto, callbackFake) => {
    const gaveta = callbackFake(novoObjeto)
    return gaveta
}


console.log(exercicio3(infosPessoa, caixaAlta))
console.log(exercicio3(infosPessoa, questaoDois))
console.log(exercicio3(infosPessoa, funcaoCall))

