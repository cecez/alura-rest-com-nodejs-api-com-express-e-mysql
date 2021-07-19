const customExpress = require('./config/customExpress')
const app           = customExpress()
const connection    = require('./infrastructure/connection')

connection.connect(erro => {
    if (erro) console.log(erro)
})
app.listen(3000, () => console.log('Express rodando na porta 3000'))