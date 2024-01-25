const express = require("express");
const routers = require('../routes/routes')
const app = express();

app.use(express.json());
app.use(routers);

app.get('/', (request,response) => {
     response.send("Hello World");
})

app.listen(3000, () =>{
    console.log("Servidor ativo.")
})