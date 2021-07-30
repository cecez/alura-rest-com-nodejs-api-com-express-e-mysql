const moment = require('moment')
const conexao = require("../infrastructure/connection")

class Atendimento {

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
            resposta.status(400).json(erros)
            return
        }

        // dados validos, realiza inserção
        const atendimentoDatado = {...atendimento, data, data_de_criacao}

        const sql = 'INSERT INTO atendimentos SET ?'

        conexao.query(sql, atendimentoDatado, (erro, resultados) => {
            if (erro) {
                resposta.status(400).json(erro)
            } else {
                resposta.status(201).json(resultados)
            }
        })
    }

    buscaPorId(id, resposta) {
        const sql = 'SELECT * FROM atendimentos WHERE id = ?'

        conexao.query(sql, id, (erro, resultado) => {
            if (erro) {
                resposta.status(400).json(erro)
            } else {
                const atendimento = resultado[0]
                resposta.status(200).json(atendimento)
            }
        })
    }

    lista(resposta) {
        const sql = 'SELECT * FROM atendimentos'

        conexao.query(sql, (erro, resultados) => {
            if (erro) {
                resposta.status(400).json(erro)
            } else {
                resposta.status(200).json(resultados)
            }
        })
    }

}

module.exports = new Atendimento