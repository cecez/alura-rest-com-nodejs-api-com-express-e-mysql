const moment = require('moment');
const conexao = require("../infrastructure/connection");

class Atendimento {

    adiciona(atendimento) {
        const data_de_criacao = moment().format('YYYY-MM-DD HH:mm:ss');
        const data = moment(atendimento.data, 'DD/MM/YYYY').format('YYYY-MM-DD HH:mm:ss');
        const atendimentoDatado = {...atendimento, data, data_de_criacao};

        const sql = 'INSERT INTO atendimentos SET ?';

        conexao.query(sql, atendimentoDatado, (erro, resultados) => {
            if (erro) {
                console.log(erro)
            } else {
                console.log(resultados)
            }
        })
    }

}

module.exports = new Atendimento