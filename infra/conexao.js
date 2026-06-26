const mysql = require("mysql2");

//preencha com suas credenciais
const conexao = mysql.createConnection({
    host: "",
    port: "",
    user: "",
    password: "",
    database: "",
})

module.exports = conexao;