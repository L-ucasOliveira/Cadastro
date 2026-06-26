class Tabelas{
    init(conexao){
        this.conexao = conexao;
        this.criarTabelaCadastro();
    }

    criarTabelaCadastro(){
       const sql = 
        `create table if not exists cadastro(
        id int not null auto_increment primary key,
        nome varchar(100),
        email varchar(100),
        telefone varchar(20),
        data date);`;
        this.conexao.query(sql, (error) => {
            if(error){
                console.log("Erro ao criar a tabela cadastro")
                console.log(error.message);
                return;
            }
            console.log("Tabela cadastro criada com sucesso !!!")
        })
    }
}

module.exports = new Tabelas();