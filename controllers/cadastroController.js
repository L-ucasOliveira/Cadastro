const cadastroModel = require("../models/cadastroModel")
class CadastroController {
    buscar(){
        return cadastroModel.listar();
    }
    criar(novoCadastro){
        return cadastroModel.criar(novoCadastro);
    }
    atualizar(cadastroAtualizado, id){
        return cadastroModel.atualizar(cadastroAtualizado, id);
    }
    deletar(id){
        return cadastroModel.deletar(id);
    }
}

module.exports = new CadastroController();