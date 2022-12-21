
const express = require('express');
const { TodoDB } = require('./database');
const app = express();
const port = 3000;
const db = new TodoDB();

app.use(express.json());

app.get('/todo', (req, res) => {
    console.log('incoming get request')
    db.getTodo().then((data) => {
        console.log(data);
        res.send(data);
    });
});

app.get('/todo/:id', (req, res) => {
    const todoId = req.params.id;
    console.log('incoming get request id');
    db.getTodo(todoID).then((data) => {
        console.log(data);
        res.send(data);
    });
});

app.post('/todop', (req, res) => {
    const todoId = req.params;
    console.log('incoming post request');
    //console.log('body:',req);
    console.log('body:', req.body.title);

    // db.createTodo().then((data) => {
    //     console.log(data);
    //     res.send(data);
    // });
});

app.put('/todo/:id', (req, res) => {
    const todoId = req.params.id;
    console.log('incoming get request id');
    db.getTodo(todoID).then((data) => {
        console.log(data);
        res.send(data);
    });
});

app.delete('/todo/:id', (req, res) => {
    const todoId = req.params.id;
    console.log('incoming get request id');
    db.getTodo(todoID).then((data) => {
        console.log(data);
        res.send(data);
    });
});

app.listen(port, () => {
    console.log('todo app backend server running on port: ' + port.toString());
})
