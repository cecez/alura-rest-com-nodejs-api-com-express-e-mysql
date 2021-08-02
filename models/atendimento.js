const moment = require('moment')
const conexao = require("../infrastructure/connection")

class Atendimento {

    retornoJson(resposta, status, retorno) {
        resposta.status(status).json(retorno)
    } 

    adiciona(atendimento, resposta) {
        const data_de_criacao = moment().format('YYYY-MM-DD HH:mm:ss')
        const data = moment(atendimento.data, 'DD/MM/YYYY').format('YYYY-MM-DD HH:mm:ss')

        // validações (data maior que hoje, cliente com 5+ caracteres)
        const dataEstaValida = moment(data).isSameOrAfter(data_de_criacao)
        const clienteEstaValido = atendimento.cliente.length >=5

        const validacoes = [
            { campo: 'data', valido: dataEstaValida, mensagem: 'Data deve ser maior ou igual a data atual' },
            { campo: 'cliente', valido: clienteEstaValido, mensagem: 'Cliente deve ter pelo menos cinco caracteres' }
        ]

        const erros = validacoes.filter(campo => !campo.valido)
        const existemErros = erros.length

        if (existemErros) {
            this.retornoJson(resposta, 400, erros)
            return
        }

        // dados validos, realiza inserção
        const atendimentoDatado = {...atendimento, data, data_de_criacao}

        const sql = 'INSERT INTO atendimentos SET ?'

        conexao.query(sql, atendimentoDatado, (erro, resultados) => {
            if (erro) {
                this.retornoJson(resposta, 400, erro)
            } else {
                this.retornoJson(resposta, 201, atendimentoDatado)
            }
        })
    }

    altera(id, valores, resposta) {

        if (valores.data) {
            valores.data = moment(valores.data, 'DD/MM/YYYY').format('YYYY-MM-DD HH:mm:ss')
        }

        const sql = 'UPDATE atendimentos SET ? WHERE id = ?'

        conexao.query(sql, [valores, id], (erro, resultados) => {
            if (erro) {
                this.retornoJson(resposta, 400, erro)
            } else {
                this.retornoJson(resposta, 200, {...valores, id})
            }
        })

    }

    buscaPorId(id, resposta) {
        const sql = 'SELECT * FROM atendimentos WHERE id = ?'

        conexao.query(sql, id, (erro, resultado) => {
            if (erro) {
                this.retornoJson(resposta, 400, erro)
            } else {
                this.retornoJson(resposta, 200, resultado[0])
            }
        })
    }

    deleta(id, resposta) {
        const sql = 'DELETE FROM atendimentos WHERE id = ?'

        conexao.query(sql, id, (erro, resultados) => {
            if (erro) {
                this.retornoJson(resposta, 400, erro)
            } else {
                this.retornoJson(resposta, 200, {id})
            }
        })
    }

    lista(resposta) {
        const sql = 'SELECT * FROM atendimentos'

        conexao.query(sql, (erro, resultados) => {
            if (erro) {
                this.retornoJson(resposta, 400, erro)
            } else {
                this.retornoJson(resposta, 200, resultados)
            }
        })
    }

}

module.exports = new Atendimento