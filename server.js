const express = require('express');
const app = express();

app.listen(3000, function () {
    console.log(`servidor rodando na porta 30000`);
});

app.get('/', function (req, resp) {
    resp.send(
        `
        <html>
            <head>
                <meta charset="utf-8">
            </head>
            <body>
                <h1> Casa do Código </h1>
            </body>
        </html>
        `
    );
});

app.get('/livros', function (req, resp) {
    resp.send(
        `
        <html>
            <head>
                <meta charset="utf-8">
            </head>
            <body>
                <h1> Listagem de Livros </h1>
            </body>
        </html>
        `
    );
});

// const http = require('http');

// const servidor = http.createServer(function (req, resp) {

//     resp.end('<html><body><a href="http://www.alura.com.br">Site da Alura</a></body></html>')
// });
// servidor.listen(3000);