const { log } = require("console");
const express = require("express");
const { join } = require("path");
const path = require("path")

const app = express()

const caminhoBase = path.join(__dirname, "templates")

app.use(express.urlencoded({
    extended: true
}))

app.use(express.json())


const usuario =   {
    name: "Bernardo Raposo" ,
    email: "daviraposo124@gmail.com" ,
    senha: 1234
}

app.post('/cadastrar/salvar',(requisicao, resposta) => {
   const nome = requisicao.body.nome
   const email = requisicao.body.email
   const senha = requisicao.body.senha

   console.log (`o email do usuario é: ${email}`)
   
})

app.get('/cadastrar' , (requisicao, resposta) => {
    resposta.sendfile(`${caminhoBase}/cadastro.html`)
})

app.get('/usuarios/:id' , (requisicao, resposta) =>{
    const id = requisicao.params.id

    console.log(`Acessando dados do usuario ${id}`)
    resposta.sendFile(`${caminhoBase}/usuarios.html`)
})

app.get('/' ,(requisicao, resposta)=> {
     resposta.sendfile(`${caminhoBase}/index.html`)  
})

app.listen(3000, () =>{
    console.log("Servidor rodando")
})