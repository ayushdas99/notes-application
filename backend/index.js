const express = require('express')
const dotenv = require('dotenv')
const port = 3001
const connectDB = require('./config/db')
const bcrypt = require('bcryptjs')

connectDB()

const app = express()

app.use(express.json())

app.post('/register', (req,res) => {
  const{username, password} = req.body;
  bcrypt.hash(password, 10)
  .then()
  res.json("register")
});

app.post('/login', (req,res) => {
  res.json("login")
});

app.get('/profile', (req,res) => {
  res.json("register")
});



app.listen(port, () => {
    console.log(`Server listening on ${port}`);
  });