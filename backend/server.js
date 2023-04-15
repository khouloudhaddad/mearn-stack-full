const express = require('express')
const colors = require('colors')
const dotenv = require('dotenv').config()
const port = process.env.PORT || 5000
const {errorHandler} = require('./middleware/errorMiddleware')
const connectDB = require('./config/db')
const app = express()

connectDB() 

//middleware
app.use(express.json())
//urlencoded 
app.use(express.urlencoded({extended: false}))

app.use('/api/goals', require('./routes/goalRoutes'));

app.use(errorHandler)

app.listen(port, ()=>{
    console.log(`Server started on port ${port}`)
})