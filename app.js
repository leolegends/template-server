
const express = require('express')

const path = require('path');

const porta = 3000

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', function(req, res, next) {
    res.render('index', {
        title: "Meu primeiro servidor Express",
        version: "0.0.0"
    });
});

app.listen(porta, () => {
    console.log(`Rodando na porta ${porta} e utilizando Express e Axios`)
});

