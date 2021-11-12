import "reflect-metadata";
import express from "express";

const app = express();

import "./database";


// Tipo de parametros
// Routs params => 
// Query Paramns => chave e valor na url, nao é obrigatorio
// Body Paramns => paramentos que vem no corpo, por exemplo dentro de um json

// Rotas

app.get("/test", (req, res) => {

   return res.send("Oi eu sou um response");
});

//get especifico com paramentros na rota

app.get("/test/{id}", (req, res) => {
   // const id = req.params.id;

    return res.send("Oi eu sou um response com o ID");
 });

app.post("/test-post", (req, res) => {

    return res.send("eu sou um POST");
});

app.put("/teste-put", (req, res) => {

    return res.send("Eu sou um Put");
});

app.delete("/teste-delete", (req, res) => {

    return res.send("Eu fui deletado ;(");
});




app.listen(3005, ()=>{
    console.log("Servidor Rodando");
});