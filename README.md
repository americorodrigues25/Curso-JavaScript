# Curso de JavaScript - Matheus Battisti

## Este repositótio é onde tem todo o conteudo das video aulas que realizei durante o curso de JavaScript do básico ao avançado.

# Projetos 👇

---

# 🚀 Projeto Job Finder

---

## 🎯 Sobre o Projeto

O **Job Finder** é um sistema web desenvolvido com **Node.js**, **Express**, **Handlebars**, **Sequelize** e **SQLite**.  
Ele permite uma simulação de cadastro vagas de trabalho e que candidatos busquem por oportunidades através de uma interface intuitiva e responsiva.

---

## 🌟 Funcionalidades

- **Busca de Vagas**: Pesquise vagas pelo título (exemplo: PHP, React, Node.js...)  
- **Cadastro de Vagas**: Empresas podem cadastrar novas vagas preenchendo um formulário simples e direto  
- **Visualização Detalhada**: Veja detalhes completos da vaga, incluindo descrição, salário e contato da empresa  
- **Destaques**: Vagas novas aparecem sinalizadas para chamar atenção  
- Atualização em tempo real com **nodemon** para facilitar o desenvolvimento  

---

## 🛠 Tecnologias Utilizadas

- [Node.js](https://nodejs.org/)  
- [Express.js](https://expressjs.com/)  
- [Express Handlebars](https://handlebarsjs.com/) (Template Engine)  
- [Sequelize](https://sequelize.org/) (ORM para SQLite)  
- [SQLite3](https://www.sqlite.org/index.html) (Banco de dados leve e rápido)  
- [Bootstrap 5](https://getbootstrap.com/) (Para estilos e responsividade)  
- [Nodemon](https://nodemon.io/) (Desenvolvimento com recarga automática)

---

## 📚 Aprendizados

-  **Configuração e uso do Express.js** para criar rotas e servir páginas dinâmicas  
-  **Integração do Handlebars** como template engine para gerar HTML dinâmico de forma organizada  
-  **Modelagem de dados com Sequelize** e manipulação do SQLite, criando modelos e consultas eficientes  
-  **Estruturação de rotas e controllers** para organizar a aplicação e manter o código limpo  
-  **Uso do Bootstrap 5** para construir uma interface responsiva e agradável  
-  **Utilização do nodemon** para melhorar o fluxo de desenvolvimento com recarga automática  
-  **Tratamento de erros e feedbacks** para garantir que o usuário saiba o que acontece durante o uso  
-  **Implementação de buscas com Sequelize** usando filtros e operadores `like` para oferecer uma experiência amigável  
-  Noções importantes de UX, como destacar vagas novas e facilitar o cadastro e busca para os usuários

---

## 🎨 Layout

- Tela inicial com busca e listagem de vagas em destaque  
- Formulário para cadastro de novas vagas  
- Página detalhada para cada vaga com todas as informações necessárias  

---

## 📸 Imagens do projeto

<p align="center">
  <img src="https://github.com/user-attachments/assets/3c48b9c1-3976-482f-9b96-add76e62d945" width="400" />
  <img src="https://github.com/user-attachments/assets/2bfe85ad-fdbd-4927-863e-cbe07b2994e2" width="400" />
  <img src="https://github.com/user-attachments/assets/5d26fa05-2e6e-46f9-a083-712729f1b879" width="400" />
</p>



## 🚀 Como rodar o projeto localmente

1. Clone o repositório  
```bash
git clone https://github.com/seuusuario/projeto-job-finder.git
cd projeto-job-finder
```

2. Instale as dependências
```bash
Instale as dependências
```

3. Inicie o servidor
```bash
npm run run dev
```

4. Acesse no navegador:
```bash
http://localhost:3000
```

---

# 🚀 Projeto Quizz de Programação em JavaScript!

---

## 🎯 Sobre o Projeto

Este projeto é um **quizz interativo** com perguntas de múltipla escolha sobre programação. Ao final, o usuário recebe uma pontuação e pode reiniciar o jogo quantas vezes quiser!

O jogo foi construído **do zero**, sem bibliotecas externas, com foco total em **JavaScript puro**, manipulação de DOM e estruturação lógica do fluxo de perguntas e respostas.

---

## 📚 Aprendizados

Durante o desenvolvimento deste projeto, aprendi:

- 🧠 Como manipular o **DOM** com **JavaScript puro**
- 🧩 Criar **templates dinâmicos** para botões e perguntas
- 🎯 Aplicar **event listeners** para garantir interatividade com o usuário
- 🎨 Usar **classes CSS** de forma **condicional**, adaptando os estilos dinamicamente
- ⏱ Controlar o **fluxo de execução** com `setTimeout` e variáveis de estado
- 🏁 Criar **lógica de pontuação** e **finalização do jogo**, com feedback ao usuário

---

## ✨ Funcionalidades

-  Exibição dinâmica de perguntas e respostas
-  Destaque das respostas corretas e incorretas
-  Cálculo automático da pontuação final
-  Botão de reinício do jogo
-  Interface simples e responsiva

---

## 🛠 Tecnologias Utilizadas

- [HTML5](https://developer.mozilla.org/pt-BR/docs/Web/HTML)
- [CSS3](https://developer.mozilla.org/pt-BR/docs/Web/CSS)
- [JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)

---

## 📸 Imagem do projeto

<p align="center">
  <img src="https://github.com/user-attachments/assets/b333b921-9cd9-44a0-8e1e-aac181d1a8b8" width="400" />
  <img src="https://github.com/user-attachments/assets/0361b619-4580-4c44-b2cc-d4fdeb67cd3e" width="400" />
</p>

---

## 🚀 Como usar

1. Clone o repositório:
```bash
git clone https://github.com/seuusuario/quizz-js.git
cd quizz-js
```

---

# 🚀 Projeto Jogo da Velha

---

## 🎯 Sobre o Projeto

Este é um projeto simples de **Jogo da Velha** desenvolvido em **HTML, CSS e JavaScript puro**, onde o jogador pode escolher jogar contra outro jogador ou contra a IA (jogador automático).

---

## 📚 Aprendizados

Durante o desenvolvimento deste projeto, foram aplicados e reforçados os seguintes conhecimentos:

### Manipulação do DOM
- Uso de `document.querySelector`, `querySelectorAll`, `getElementById` para capturar elementos HTML.
- Manipulação de elementos com `appendChild`, `cloneNode`, `classList.add/remove`, `innerText`, `innerHTML`.

### Eventos
- Utilização de `addEventListener("click", ...)` para detectar cliques nos quadrados do jogo e nos botões de modo de jogo.
- Adição de eventos para múltiplos elementos com loops `for`.

### Controle de Fluxo e Condições
- Estrutura condicional (`if/else`) para verificar jogadas, empates e vitórias.
- Uso de loops (`for`) para iterar pelas células do tabuleiro e detectar padrões vencedores.

### Lógica do Jogo
- Alternância de jogadores (`X` e `O`) usando variáveis de controle.
- Verificação de condições de vitória (linhas, colunas, diagonais).
- Detecção de empate (jogo da velha) ao preencher todas as células sem vencedor.

### Implementação de IA Simples
- Modo de jogo contra o computador com lógica de jogada aleatória.
- IA básica que ocupa uma célula vazia aleatoriamente.

### Sistema de Pontuação
- Variáveis `scoreX` e `scoreO` mantêm a pontuação mesmo após várias rodadas.
- Atualização dinâmica do placar na tela com `innerText`.

### Reset e UX
- Exibição de mensagens de vitória/empate com `setTimeout` para reinício automático do jogo.
- Uso de `classList.add("hide")` e `classList.remove("hide")` para esconder ou exibir elementos.

### Organização do Código
- Separação clara por funções:
  - `checkEl()` → Verifica o jogador da vez.
  - `checkWinCondition()` → Verifica se houve vitória ou empate.
  - `declareWinner()` → Exibe o vencedor e atualiza placar.
  - `resetGame()` → Limpa o tabuleiro para a próxima rodada.
  - `computerPlayers()` → Executa a jogada automática da IA.

---

## ✅ Tecnologias Utilizadas

- [HTML5](https://developer.mozilla.org/pt-BR/docs/Web/HTML)
- [CSS3](https://developer.mozilla.org/pt-BR/docs/Web/CSS)
- [JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)

---

## 📸 Imagem do projeto

<p align="center">
  <img src="https://github.com/user-attachments/assets/dfa497f2-77c4-40f7-882a-55cf85c1ee5e" width="400" />
  <img src="https://github.com/user-attachments/assets/e042321f-e452-4ae6-bf2e-c93ee5a81080" width="400" />
</p>

---

## 💡 Como usar

1. Clone este repositório:
```bash
git clone https://github.com/seu-usuario/jogo-da-velha.git
```
