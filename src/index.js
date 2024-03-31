const express = require('express')
const arrayUsuarios = require('./arrayDeUsuarios')

const app = express()

app.get('/usuarios', (requisicao,resposta) => {
    resposta.send(arrayUsuarios)
})

app.listen(3000) //a porta onde o navegador vai se comunicar com o express.


