class Tabelas {

    init(conexao) {
        console.log('Inicializando tabelas do banco de dados...');
        this.conexao = conexao
        this.criaTabelaAtendimentos()
    }

    criaTabelaAtendimentos() {
        const sql = `CREATE TABLE IF NOT EXISTS atendimentos (
            id int not null auto_increment,
            cliente varchar(100) not null,
            pet varchar(100) not null,
            servico varchar(100) not null,
            status varchar(100) not null,
            observacoes text,
            primary key (id)
        )`;

        this.conexao.query(sql, (erro) => {
            if (erro) {
                console.log(erro)
            } else {
                console.log('Tabela de atendimentos criada com sucesso')
            }
        })
    }

}

module.exports = new Tabelas