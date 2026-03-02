
const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2/promise');
const app = express();
const cors = require('cors');
const port = 8000
app.use(bodyParser.json());
app.use(cors());

let users = []
let counter = 1;
let conn = null
const initDBConnection = async () => {
    conn = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'webdb',
        port: 8832
    })
}

//path GET / users

app.get('/users', (req, res) => {
    res.json(users);
})

//path POST /user สำหรับเพิ่ม user ใหม่

app.post('/users', async(req, res) => {
    let user = req.body;
    const results = await conn.query('INSERT INTO users SET ?', user);
    console.log('results', results);
    res.json({
        message: 'User created successfully',
        data: results[0]
        })
    })
app.listen(8000, async() => {
    await initDBConnection();
    console.log(`Server is running on port 8000`);
}); 