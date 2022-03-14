const express = require('express')
const port = 3001
const { errorHandler } = require('./middleware/errorMiddleware')
const mongoose = require('mongoose')

require('dotenv').config()



const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/goals', require('./routes/goalRoutes'))
app.use('/users', require('./routes/userRoutes'))

app.use(errorHandler)

mongoose.connect('mongodb+srv://reactuser:user123@cluster-react-app.mvywr.mongodb.net/mernapp?retryWrites=true&w=majority', { useNewUrlParser: true }, () => {
  console.log('Connected to DB')
})



app.listen(port, () => {
  console.log(`Server listening on ${port}`)
})
