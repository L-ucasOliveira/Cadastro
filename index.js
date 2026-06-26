const express = require("express");
const app = express();
const port = 9000;
const router = require("./routers/index");
const conexao = require("./infra/conexao");
const tabelas = require("./infra/tabelas");

tabelas.init(conexao);
router(app, express);

app.listen(port, (error) => {
    if(error){
        console.log(error);
        return;
    }
    console.log("Subiu na porta: "+ port)
});

