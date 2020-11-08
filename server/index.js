const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./config/db');

const app = express();

app.use(cors());
app.use(express.json())
app.use(bodyParser.urlencoded({ extended:true }));


app.get('/api/get',(req,res) => {
    const sql = "SELECT * FROM posts";
    db.query(sql,(err,result) => {
        console.log(result)
        res.send(result)
    })
})
app.post('/api/create', (req, res) => {
    const date = new Date().toISOString().slice(0, 10);
    const title = req.body.title;
    const content = req.body.content;
    const publisher = req.body.publisher;
    const description = req.body.description;

    const sql = "INSERT INTO posts (title,body,publisher,date,description) VALUES (?, ?, ?,?,?);";
    db.query(sql,[title,content,publisher,date,description], (err, result) => {
        if(err) console.log(err);
        console.log(result)
    })
})

const port = process.env.PORT || 3001
app.listen(port, () => {console.log("Server Started")})