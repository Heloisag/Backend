const express = require('express');
const req = require('express/lib/request');
const res = require('express/lib/response');
const server = express();
const filmes = require('./src/data/filmes.json')

server.get('/cartaz', (req, res) => {
    return res.json({ filmes })
});

// server.get('/usuarios', (req, res) => {
//     return res.json({
//         usuario: 'Heloisa Goulart'
//     })
// });

server.listen(3000, () => {
    console.log('SERVIDOR ESTÁ ONLINE...');
});