//const express = require('express')
import express from 'express'; // <-- Module Style import
import bodyParser from 'body-parser';
import userRouter from './routes/users.js'

const app = express()
const port = 3000

app.use(bodyParser.json());
app.use('/users', userRouter);

app.get('/', (req, res) => {
    res.send('Hello World 3!')
})

app.post('/', (req, res) => {
    console.log(req.body.name)
    res.send('Default Post Route')
})

app.get('/todos', (req, res) => {
    res.send('ToDo Items')
})

app.post('/user', (req, res) => {
    console.log(req.body)
    res.send('ToDo Items received')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})