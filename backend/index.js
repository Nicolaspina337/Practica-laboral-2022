// servidor backend de nodo
const http = require('http');
const badyParser = require('body-parser');
const express = require('express');
const registro_usuarioApi = require('./api/registro_usuarioApi');
const DBHelper = require('./utils/DBHelper');

let conn = new DBHelper().getConn();

let app = express();
let server = http.createServer(app);

app.use(badyParser.json());
app.use(badyParser.urlencoded({
    extended: false
}));

// enrutamiento api back-end
app.use('/api/registro_usuario', registro_usuarioApi);


// empieza a escuchar
server.listen(8888, () => {
    console.log(' success!! port:8888')
})