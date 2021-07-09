module.exports = (app) => {
    app.get('/atendimentos', (request, response) => {
        console.log('/atendimentos acessado') 
        response.send('Oi, aqui é do servidor e você está na rota de atendimentos, volte em breve.') 
    })
}