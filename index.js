const express = require('express');
const req = require('express/lib/request');
const res = require('express/lib/response');
const server = express();

server.get('/', (req, res) => {
    return res.json({ mensagem: 'API online' })
});

server.listen(3000), () => {
    console.log('SERVIDOR ESTÁ ONLINE');
}