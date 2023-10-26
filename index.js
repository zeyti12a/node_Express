const { log } = require("console");
const express = require("express");
const { join } = require("path");
const path = require("path")

const app = express()

const caminhoBase = path.join(__dirname, "templates")

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