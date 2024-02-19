const express = require("express")
const app = express()
const db = require('./config/database.js');
require("dotenv").config()
const PORT = process.env.PORT || 3000
const posts = require("./routes/posts")

app.use(express.json()) //parseamos el body sino es undefined
app.use("/", posts)

app.get('/createdb', (req, res) => {
    let sql = 'CREATE DATABASE expressDB';
    db.query(sql, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send('Database created...')
    })
})

app.get('/createpoststable', (req, res) => {
    let sql = 'CREATE TABLE posts(id INT AUTO_INCREMENT,title VARCHAR(255), body VARCHAR(255), PRIMARY KEY(id))'
    db.query(sql, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send('Posts table created...')
    })
})

app.listen(PORT, () => "Servidor levantado en el puerto" + PORT)