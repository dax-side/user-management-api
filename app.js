const express = require('express')
const app = express()
const { v4: uuidv4 } = require('uuid')

let users = []

app.use(express.json())
//Get all users
app.get('/users', (req, res) => {
    res.send(users)
})
//Create a user

app.post('/users', (req, res) => {
    const createduser = req.body
    const userId = uuidv4();
    const userWithId = { ...createduser, id: userId }
    users.push(userWithId)
    res.send(`User with name ${createduser.firstName} added to the database`)
})

//Getting one user with id

app.get('/users/:id/', (req, res) => {
    // console.log(req.params.id)
    const { id } = req.params;

    const foundUser = users.find((user) => user.id === id)
    res.send(foundUser)
})
// Delete users with data
app.delete('/users/:id', (req, res) => {
    const { id } = req.params;

    users = users.filter((user) => user.id !== id)

    res.send(`The ${id} specified was succesfully deleted`)
})

app.patch('/users/:id', (req, res) => {
    const { id } = req.params;

    const user = users.find((user) => user.id === id)
    const { firstName, lastName, age } = req.body;

    if (firstName) {
        user.firstName = firstName;
    }
    if (lastName) {
        user.lastName = lastName;
    }
    if (age) {
        user.age = age;
    }

    

    res.send(`The user with ${id} is updated succesfully`)
})


app.listen(3000, (req, res) => {
    console.log('Server is listening on port 3000')
})
