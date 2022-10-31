const express = require('express')
const app = express()
const cors = require('cors')
const fs = require('fs');
'use strict';

app.use(express.json())

const port = 3000

app.use(cors())




app.get('/api/camisetas', (req, res) => {
    let data = fs.readFileSync('../Datos/Camisetas.json');
    let camisetas = JSON.parse(data);
    console.log(camisetas);
    res.send(camisetas);
})

app.get('/api/botines', (req, res) => {
    let data = fs.readFileSync('../Datos/Camisetas.json');
    let botines = JSON.parse(data);
    console.log(botines);
    res.send(botines);
})

app.get('/api/gorras', (req, res) => {
    let data = fs.readFileSync('../Datos/Camisetas.json');
    let gorras = JSON.parse(data);
    console.log(gorras);
    res.send(gorras);

})

app.get('/api/mochilas', (req, res) => {
    let data = fs.readFileSync('../Datos/Camisetas.json');
    let mochilas = JSON.parse(data);
    console.log(mochilas);
    res.send(mochilas);

})


app.get('/api/shorts', (req, res) => {
    let data = fs.readFileSync('../Datos/Camisetas.json');
    let shorts = JSON.parse(data);
    console.log(shorts);
    res.send(shorts);

})


app.listen(port)