const http = require('http');

const servidor = http.createServer(function (req, resp) {

    resp.end('<html><body><a href="http://www.alura.com.br">Site da Alura</a></body></html>')
});
servidor.listen(3000);