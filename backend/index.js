const express = require('express')
const dotenv = require('dotenv')
const port = 3001
const connectDB = require('./config/db')
const bcrypt = require('bcryptjs')

connectDB()

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/goals', require('./routes/goalRoutes'))
app.use('/users', require('./routes/userRoutes'))



app.listen(port, () => {
    console.log(`Server listening on ${port}`);
  });