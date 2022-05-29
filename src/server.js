const express = require('express');
const route = require('./route');
const path = require('path');


const server = express();

server.set('view engine' , 'ejs');

server.use(express.static('public'));

// server.set('views', 'src/views');  essa é uma soluçao

// o path.join junta o que ta dentro do parentes que no caso é o nome do diretorio onde o server.js esta para criar o caminho 
// resultado vai ser src/viwes

server.set('views', path.join(__dirname, '/views'));

server.use(route);

server.listen(3000, () => console.log("RODANDO"));