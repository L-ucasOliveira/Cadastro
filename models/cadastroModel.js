const conexao = require("../infra/conexao");
class CadastroModel {
    listar(){
        const sql = "Select * from cadastro"
        return new Promise((resolve, reject) => {
            conexao.query(sql, {}, (error, resposta) => {
                if(error){
                    console.log("Deu erro no listar ...");
                    reject(error);
                }
                console.log("OK");
                resolve(resposta);
        });
        });
    }
    criar(novoCadastro){
        const sql = "insert into cadastro set ?"
        return new Promise((resolve, reject) => {
            conexao.query(sql, novoCadastro, (error, resposta) => {
                if(error){
                    console.log("Deu erro no listar ...");
                    reject(error);
                }
                console.log("OK");
                resolve(resposta);
        });
        });
    }
    atualizar(cadastroAtualizado, id){
        const sql = "update cadastro set ? where id = ?"
        return new Promise((resolve, reject) => {
            conexao.query(sql, [cadastroAtualizado, id], (error, resposta) => {
                if(error){
                    console.log("Deu erro ao atualizar ...");
                    reject(error);
                }
                console.log("OK");
                resolve(resposta);
        });
        });
    }
    deletar(id){
        const sql = "delete from cadastro where id = ?"
        return new Promise((resolve, reject) => {
            conexao.query(sql, id, (error, resposta) => {
                if(error){
                    console.log("Deu erro ao deletar ...");
                    reject(error);
                }
                console.log("OK");
                resolve(resposta);
        });
        });
    }
}


module.exports = new CadastroModel();