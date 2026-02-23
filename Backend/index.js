// ทำการ import http module เพื่อสร้าง server
const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2/promise');
const app = express();
const port = 8000;

app.use(bodyParser.json());

let users = []
let counter = 1;

/**
 * GET /user สำหรับ get ข้อมูล user ทั้งหมด
 * POST /user สำหรับเพิ่ม user ใหม่
 * GET /user/:id สำหรับ get ข้อมูล user ที่มี id ตรงกับที่ส่งมา
 * PUT /user/:id สำหรับแก้ไขข้อมูล user  ที่มี id ตรงกับที่ส่งมา
 * DELETE /user/:id สำหรับลบ user ที่มี id ตรงกับที่ส่งมา 
 */

app.get('/testdb', (req,res) =>{
    mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '1234',
        database: 'webdb',
    }).then((con)=> {
        con.query('SELECT FROM usersxx')
        .then((results) => {
            res.json(results[0]);
        })
        .catch((err) => {
            console.error('Database query error:',err.message);
            res.status(500).json({error: 'Database qyery error'});
        });
    });
});

//path = GET /user สำหรับ get ข้อมู users ทั้งหมด
app.get('/user',(req, res) => {
    const filterUsers = users.map(user => {
        return {
            firstname: user.firstname,
            lastname: user.lastname,
            fullname: '${user.fristname}${user.lastname}'
        }
    })
})

//path = POST /users สำหรับ user ใหม่
app.post('/user',(req,res)=> {
    let user = req.body;
    user.id = counter
    counter += 1
    user.push(user);
    res.json({
        message: 'User added successfully',
        user: user});
    })

//path GET /user/:id สำหรับ get ข้อมูล user ที่มี id ตรงกับที่ส่งมา
app.get('/user',(req,res)=> {
    let id = req.params.id
    let selectedUser = user.findIndex(user => user.id == id)
    res.json(user[selectedUser])
})

//path PUT /user/:id สำหรับ get ข้อมูล user ที่มี id ตรงกับที่ส่งมา
app.get('/user',(req,res)=> {
     let id = req.params.id
     let updatedUser = req.body;
     //หา user จาก id
     let selectedIndex = user.findIndex(user => user.id == id)
     //update user นั้น
     user[selectedIndex].firstname = updatedUser.firstname || user[selectedIndex].firstname
     user[selectedIndex].lastname = updatedUser.lastname || user[selectedIndex].lastname
     user[selectedIndex].age = updatedUser.age || user[selectedIndex].age
     user[selectedIndex].gender = updatedUser.gender || user[selectedIndex].gender

// ส่ง response กลับว่า update users ที่สำเร็จเลือกแล้ว
    res.json({
        message: 'User updated successfully',
        data: {
            user: updatedUser,
            indexUpdated: selectedIndex
        }
    })
})
    


//path = /user
app.get('/user',(req, res) => {
    res.json(user);
       
});

//path = POST /user
app.post('/user',(req, res) => {
    let user = req.body;
    user.id = counter
    counter += 1
    user.push(user);
    res.json({
         message: 'User added successfully',
        user: user});
})

//path = PUT /user/:id
app.put('/user/:id',(req,res) => {
    let id = req.params.id
    let updatedUser = req.body;
    // หา user จาก id
    let selectedIndex = users.findIndex(user => user.id == id)
    // updated users นั้น
    if (updatedUser.name) {
        user[selectedIndex].name = updatedUser.name
    }
    if (updatedUser.age) {
        user[selectedIndex].age = updatedUser.age
    }

    // response กลับว่า update users ที่เลือกสำเร็จ

    res.json({
        message: 'User updated successfully',
        data : {
            user: updatedUser
            indexUpdated: selectedIndex
        }
    })
})  

//path = DELETE /users/:id
app.delete('/user/:id', (req,res) => {
    let id = req.params.id
    let selectedIndex = users.findIndex(user => user.id == id)
    if (selectedIndex !== -1){
        user.splice(selectedIndex,1)
        res.json({
            message: 'User deleted successfully',
            data: {
                indexDeleted: selectedIndex
            }
        })
    }else {
        res.status(404).json({
            message: 'User not found'
        })
    }
})

app.listen(port, () => {
    console.log('Server is running on port 8000');
});

app.get('/users', async(req.res) => {
    const results = await conn.query('SELECT * FROM users')
    res.json(results[0]);
});

//path = POST /users สำหรับเพิ่ม users ใหม่
app.post('/users', async(req,res) => {
    let user = req.body;
    const result = await conn.query('INSERT INTO users SET ?', user)
    console.log('results',results);
    res.json({
        message: 'User create successfully',
        data: results[0]
    })
}
    catch (error) {
    res.status(500).json({
        message: 'Error creating user',
        error: error.message
    });
}

//path GET /users/:id สำหรับ get ข้อมูล user ที่มี id ตรงกับที่ส่งมา
app.get('/users/:id', (req,res) => {
    try {

    let id = req.params.id
    let selectedUser = users.findIndex(user => user.id == id)
    res.json(users[selectedUser])
}
catch (error) {
    console,error('Error fetching user:',error);
    res.status(500).json({
        message: 'Error fetching user',
        error: error.message
    });
{

})

app.get('/testdb-new', (req,res) => {
    const conn =await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'root',
        databas: 'webdb',
        port: 8820
    });
    const results = await conn.query('SELECT *FROM user');
    res.json(results[0]);
})