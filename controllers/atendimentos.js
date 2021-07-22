const Atendimento = require("../models/atendimento")


module.exports = (app) => {
    app.get('/atendimentos', (request, response) => {
        console.log('GET /atendimentos acessado') 
        response.send('Oi, aqui é do servidor e você está na rota de atendimentos, volte em breve.') 
    })

    app.post('/atendimentos', (request, response) => {
        const atendimento = request.body
        
        Atendimento.adiciona(atendimento, response)
    })
}