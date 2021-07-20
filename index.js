const customExpress = require('./config/customExpress')
const connection    = require('./infrastructure/connection')
const Tabelas       = require('./infrastructure/Tabelas')


connection.connect(erro => {
    if (erro) {
        console.log(erro)
    } else {
        console.log('Banco de dados conectado com sucesso.')
        Tabelas.init(connection)
        const app   = customExpress()
        app.listen(3000, () => console.log('Express rodando na porta 3000'))

    }        
})
