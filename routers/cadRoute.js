const { Router } = require("express");
const router = Router();
const cadastroController = require("../controllers/cadastroController")

//get
router.get("/cadastros", (req, res) => {
    const listaCad = cadastroController.buscar();
    listaCad
    .then(cadastros => res.status(200).json(cadastros))
    .catch((error) => res.status(400).json(error.message));
});
//post
router.post("/cadastros", (req, res) => {
    const novoCadastro = req.body;
    const cadastro = cadastroController.criar(novoCadastro);
    cadastro
    .then((cadastroCriado) => res.status(200).json(cadastroCriado))
    .catch((error) => res.status(400).json(error.message));
});

//put
router.put("/cadastro/:id", (req, res) => {
    const { id } = req.params;
    const cadastroAtualizado = req.body;
    const cadastro = cadastroController.atualizar(
        cadastroAtualizado,
        id
    );
    cadastro
    .then((resultCadastroAtualizado) => res.status(200).json(resultCadastroAtualizado))
    .catch((error) => res.status(400).json(error.message));
});

//delete
router.delete("/cadastro/:id", (req, res) => {
    const { id } = req.params;
    const cadastro = cadastroController.deletar(id);
    cadastro
    .then((resultCadastroDeletado) => 
    res.status(200).json(resultCadastroDeletado)
    )
    .catch((error) => res.status(400).json(error.message));
});

module.exports = router;