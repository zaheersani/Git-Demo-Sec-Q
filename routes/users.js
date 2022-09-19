import express from 'express';

// const express = require('express');
const router = express.Router();

const users = [
    {
        name: 'John Doe',
        age: 25
    },
    {
        name: 'David',
        age: 35
    }
]

router.get('/', (req, res) => {
    res.send(users)
})

router.post('/', (req, res) => {
    const user = req.body;
    console.log(req.body);
    users.push(req.body)
    console.log(users)
    res.send(users)
})

export default router;

// module.exports = router;