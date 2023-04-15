const express = require('express')
const dotenv = require('dotenv').config()
const port = process.env.PORT || 5000
const {errorHandler} = require('./middleware/errorMiddleware')
const app = express()

//middleware
app.use(express.json())
//urlencoded 
app.use(express.urlencoded({extended: false}))

app.use('/api/goals', require('./routes/goalRoutes'));

app.use(errorHandler)

app.listen(port, ()=>{
    console.log(`Server started on port ${port}`)
})