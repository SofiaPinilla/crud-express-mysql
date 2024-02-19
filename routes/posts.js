const express = require("express")
const router = express.Router()
const db = require("../config/database")

router.post("/", (req, res) => {
    let sql = `INSERT INTO posts (title, body) values
    ('${req.body.title}', '${req.body.body}');`;
    db.query(sql, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send("Post added...");
    });
});

router.get('/', (req, res) => {
    let sql = 'SELECT * FROM posts';
    db.query(sql, (err, result) => {
        if (err) throw err;
        res.send(result)
    })
})

router.get('/id/:id', (req, res) => {
    let sql = `SELECT * FROM posts WHERE id = ${req.params.id}`;
    db.query(sql, (err, result) => {
        if (err) throw err;
        res.send(result)
    })
})

router.put('/id/:id', (req, res) => {
    let sql = `UPDATE posts SET title = '${req.body.title}' WHERE id = ${req.params.id}`;
    db.query(sql, (err, result) => {
        if (err) throw err;
        res.send('Post updated...')
    })
})

router.delete('/id/:id', (req, res) => {
    let sql = `DELETE FROM posts WHERE id = ${req.params.id}`;
    db.query(sql, (err, result) => {
        if (err) throw err;
        res.send('Post deleted')
    })
})



module.exports = router