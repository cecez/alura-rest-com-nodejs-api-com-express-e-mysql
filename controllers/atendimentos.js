const Atendimento = require("../models/atendimento")


module.exports = (app) => {
    app.get('/atendimentos', (request, response) => {
        console.log('GET /atendimentos acessado') 
        response.send('Oi, aqui é do servidor e você está na rota de atendimentos, volte em breve.') 
    })

    app.post('/atendimentos', (request, response) => {
        const atendimento = request.body

        console.log('POST /atendimentos acessado, dados da requisição:') 
        console.log(request.body)        
        response.send('Oi, aqui é do servidor e você está POSTando na rota de atendimentos, grato.') 
        
        Atendimento.adiciona(atendimento)
    })
}