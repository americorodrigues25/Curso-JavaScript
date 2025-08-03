//Aqui é a configuração base do express
const express = require("express");
const { engine } = require("express-handlebars");
const path = require("path");
// Importando o módulo de conexão com o banco de dados
const app = express();
const db = require("./db/connection.js");
const bodyParser = require("body-parser");
// Importando o modelo de Job
const jobs = require("./models/Job.js");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;

const PORT = 3000;

app.listen(PORT, function () {
  console.log(`O Express está rodando na porta: ${PORT}`);
});

// body parser
app.use(bodyParser.urlencoded({ extended: false }));

// handlebars cria um motor de visualização que permite renderizar HTML dinâmico
app.set("views", path.join(__dirname, "views")); // Define o diretório onde estão os arquivos de visualização
app.set("view engine", "handlebars"); // Define o motor de visualização como Handlebars
app.engine(
  "handlebars",
  engine({ defaultLayout: "main", extname: ".handlebars" })
);

// Define o diretório onde estão os arquivos estáticos (CSS, JS, imagens)
app.use(express.static(path.join(__dirname, "public")));

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
  let search = req.query.job; // Variável para armazenar a busca
  let query = "%" + search + "%"; // Formata a busca para o Sequelize : PH -> PHP, Word -> WordPress, etc.

  if (!search) {
    jobs
      .findAll({ order: [["createdAt", "DESC"]] })
      .then((jobs) => {
        res.render("index", {
          jobs,
          search,
        });
      })
      .catch((err) => console.log(err));
  } else {
    jobs
      .findAll({
        where: { title: { [Op.like]: query } },
        order: [["createdAt", "DESC"]],
      })
      .then((jobs) => {
        res.render("index", {
          jobs,
          search,
        });
      });
  }
});

// Importando as rotas de jobs
app.use("/jobs", require("./route/jobs.js"));

// Tem uma ferramenta chamada nodemon que pormite atualizar o projeto em tempo real
// Para instalar, use o comando: npm install nodemon --save-dev
// E para rodar o projeto com nodemon, use: npm run dev
// No package.json, adicione o script "dev": "nodemon app.js" para facilitar o uso
// Isso permite que você veja as mudanças sem precisar reiniciar o servidor manualmente
