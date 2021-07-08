const express   = require('express')
const app       = express()

app.listen(3000, () => console.log('Express rodando na porta 3000'))

app.get('/atendimentos', (request, response) => response.send('Oi, aqui é do servidor e você está na rota de atendimentos, volte em breve.'))