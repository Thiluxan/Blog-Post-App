const express = require('express')
const mysql = require('mysql')
const cors = require('cors')
const bcrypt = require('bcrypt')
const bodyParser = require('body-parser')
const session = require('express-session')
const cookieParser = require('cookie-parser')
const db = require('./config/db');

const app = express()

app.use(express.json())
app.use(cors({
    origin: ['http://localhost:3000'],
    methods: ['GET', 'POST'],
    credentials:true
}))

app.use(cookieParser())
app.use(bodyParser.urlencoded({extended: true}))

app.use(session({
    key: 'userId',
    secret:'subscribe',
    resave:false,
    saveUninitialized:true,
    cookie: {
        expires: 60*60*24
    }
}))

const saltRounds = 10


app.get('/api/get',(req,res) => {
    const sql = "SELECT * FROM posts";
    db.query(sql,(err,result) => {
        res.send(result)
    })
})

app.get('/api/get/:id', (req,res) => {
    const id = req.params.id
    const sql = "SELECT * FROM posts where id = ?;"
    db.query(sql,id,(err,result) => {
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

app.post('/register', (req, res) => {
    let username = req.body.username
    let password = req.body.password
    let sql = "INSERT INTO login (username, password) VALUES (?, ?);"

    bcrypt.hash(password,saltRounds,(err,hash) => {
        if(err) return err
        db.query(sql, [username, hash],(err, result) => {
            if (err) {console.log(err)}
            console.log(result)
        })
    })
   
})

app.get('/login', (req, res) => {
    if(req.session.user){
        res.send({loggedIn: true,username: req.session.user})
    }
    else{
        res.send({loggedIn: false})
    }
})

app.get('/logout', (req, res) => {
    req.session.destroy()
})

app.post('/login', (req, res) => {
    let username = req.body.username
    let password = req.body.password
    let sql = "select * from login where username = ?"


    db.query(sql, [username],(err, result) => {
        if(err){
            console.log(err)
            res.send({error:err})
        } 
        if(result.length > 0) {
            bcrypt.compare(password,result[0].password,(error, result2) => {
                if(result2){ 
                    req.session.user = result
                    res.send(result)
                }
                else res.send({message:"Wrong Username or Password"})
            })
        }
        else{
            res.send({message:"User doesn't exist"})
        }
    })
})

const port = process.env.PORT || 3001
app.listen(port, () => {console.log("Server Started")})