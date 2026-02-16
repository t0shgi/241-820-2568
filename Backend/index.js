// ทำการ import http module เพื่อสร้าง server
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 8000;

app.use(bodyParser.text());
let users = []
let counter = 1;

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
    console.log('Server is running on port ${port}');
});
