let express = require('express');
let app = express();

app.get('/', function (req, res){
    res.send('Primeira rota com Express');
});

app.get('/teste', function (req, res){
    res.send('Teste de rota com Express - Hello World');  
});

app.listen(8000, function () {
    console.log('Servidor rodando na porta 8000');  
});