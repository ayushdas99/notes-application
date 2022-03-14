const express = require('express')
const port = 3001
const { errorHandler } = require('./middleware/userMiddleware')
const mongoose = require('mongoose')

require('dotenv/config')



const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/goals', require('./routes/goalRoutes'))
app.use('/users', require('./routes/userRoutes'))

app.use(errorHandler)

mongoose.connect(process.env.DB_CONNECTION, ()=> {
  console.log('Connected to db')
})



app.listen(port, () => {
    console.log(`Server listening on ${port}`);
  });