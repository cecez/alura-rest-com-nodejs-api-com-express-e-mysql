const Atendimento = require("../models/atendimento")


module.exports = (app) => {

    app.delete('/atendimentos/:id', (request, response) => {
        const id = parseInt(request.params.id)

        Atendimento.deleta(id, response)
    })

    app.get('/atendimentos', (request, response) => {
        Atendimento.lista(response)
    })

    app.get('/atendimentos/:id', (request, response) => {
        const id = parseInt(request.params.id)

        Atendimento.buscaPorId(id, response)
    })

    app.patch('/atendimentos/:id', (request, response) => {
        const id = parseInt(request.params.id)
        const valores = request.body

        Atendimento.altera(id, valores, response)
    })

    app.post('/atendimentos', (request, response) => {
        const atendimento = request.body
        
        Atendimento.adiciona(atendimento, response)
    })
}