const express = require("express");
const router = express.Router();
const job = require("../models/Job");

// Rota de teste para verificar se o servidor está funcionando
// Você pode acessar essa rota em http://localhost:3000/jobs/test
router.get('/test', (req, res) => {
    res.send("Rota funcinouuuuuuuu!"); 
});

// Define a rota para exibir o formulário de adição de vagas
// Você pode acessar essa rota em http://localhost:3000/jobs/add
router.get("/add", (req, res) => {
  res.render("add");
});

// Define a rota para obter todas as vagas
router.post("/add", (req, res) => {

  let { title, salary, company, description, email, new_job } = req.body;

  // inserir dados no sistema
  job.create({
    title,
    description, 
    salary,
    company,
    email,
    new_job,
  })
  .then(() => res.redirect("/")) // Redireciona para a página inicial após adicionar a vaga)
  .catch((error) => {
    console.error("Erro ao adicionar a vaga:", error);
    res.status(500).send("Erro ao adicionar a vaga");
  });
});

module.exports = router;
