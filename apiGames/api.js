const express = require('express')
const app = express()
const bodyParse = require('body-parser')
app.use(bodyParse.json())



const jogosFavoritos = []

app.post('/api/jogos', (requisicao, resposta) => {
    try {
        if(!requisicao.body.nome || !requisicao.body.plataforma) {
            throw new Error ('Campos Invalidos!')
        }
        jogosFavoritos.push(requisicao.body)
        resposta.send(JSON.stringify(requisicao.body))
    } catch (erro){
        resposta.send(JSON.stringify({ mensagem: erro.message}))
    }

})
app.get('/api/jogos', (requisicao, resposta) => {
    resposta.send(JSON.stringify(jogosFavoritos))
})








app.listen(3000, () => console.log('API está funcionando'))
