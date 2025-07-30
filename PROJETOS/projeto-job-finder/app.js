//Aqui é a configuração base do express
const express = require("express");
const app = express();
const db = require("./db/connection.js");
const bodyParser = require("body-parser");

const PORT = 3000;

app.listen(PORT, function () {
  console.log(`O Express está rodando na porta: ${PORT}`);
});

// body parser
app.use(bodyParser.urlencoded({ extended: false }));

// db connection
db.authenticate()
  .then(() => {
    console.log("Conexão com o banco de dados estabelecida com sucesso!");
  })
  .catch((error) => {
    console.error("Não foi possível conectar ao banco de dados:", error);
  });

// routes
app.get("/", (req, res) => {
  res.send("Deu certo!");
});

// Importando as rotas de jobs
app.use('/jobs', require('./route/jobs.js'));

// Tem uma ferramenta chamada nodemon que pormite atualizar o projeto em tempo real
// Para instalar, use o comando: npm install nodemon --save-dev
// E para rodar o projeto com nodemon, use: npm run dev
// No package.json, adicione o script "dev": "nodemon app.js" para facilitar o uso
// Isso permite que você veja as mudanças sem precisar reiniciar o servidor manualmente
