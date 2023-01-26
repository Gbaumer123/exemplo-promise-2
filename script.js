//Criação de promessas

const myPromise = new Promise((resolve, reject)=>{
    const nome = "Gabriel"

    if(nome === "Gabriel"){
        resolve('Usuário encontrado!')
    }else{
        reject('Usuário não encontrado')
    }
})

myPromise.then((data)=>{   //then executa a promise e data sao os dados
   console.log(data)
})



//Encadeamento de then's

const myPromise2 = new Promise((resolve, reject)=>{
    const nome = "Gabriel"

    if(nome === "Gabriel"){
        resolve('Usuário encontrado!')
    }else{
        reject('Usuário não encontrado')
    }
})

myPromise2.then((data)=>{   //then executa a promise e data sao os dados
    return data.toLowerCase() //toLowerCase retorna dados em caixa baixa
}).then((stringModificada)=>{ //o primeiro then passa a string modificada do return para a variavel stringModificada que altera as letras para caixa baixa
    console.log(stringModificada) //mostra a nova string
})


//retorno do catch
const myPromise3 = new Promise((resolve, reject)=>{
    const nome = "Julio"

    if(nome === "Gabriel"){
        resolve('Usuário encontrado!')
    }else{
        reject('Usuário não encontrado')
    }
})

myPromise3.then((data)=>{   //then executa a promise e data sao os dados
    console.log(data)
}).catch((error)=>{   //mostra o que aconteceu e concatena com o erro da promise
    console.log('aconteceu um erro: ' +error)
})

//resolver varias promessas com all

const p1 = new Promise((resolve, reject)=>{
    resolve("P1 ok!")
})

const p2 = new Promise((resolve, reject)=>{
    resolve("P2 ok!")
})

const p3 = new Promise((resolve, reject)=>{
    resolve("P3 ok!")
})

const resolveAll = Promise.all([p1,p2,p3]).then((data)=>{ //executa todas as 3 promessas de uma vez por conta do Promisse.All
    console.log(data)
})


//varias promessas com race : a primeira promessa retornada vai ser a unica mostrada

const p4 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve('P4 ok! timeout')
    }, 2000) //como a p4 está com um timeout de 2 segundos ela nuca irá ganhar a corrida da p5
    })


const p5 = new Promise((resolve, reject)=>{
    resolve("P5 ok!")
})

const p6 = new Promise((resolve, reject)=>{
    resolve("P6 ok!")
})

const resolveAllRace = Promise.race([p4,p5,p6]).then((data)=>{ //executa todas as 3 promessas porem irá mostrar só a que respondeu primeiro
    console.log(data)
})


