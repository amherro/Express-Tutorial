const express = require('express')
const dotenv = require('dotenv')
// Route Files
const bootcamps = require('./routes/bootcamps')
// Middleware
const morgan = require('morgan')

// Load env variables
dotenv.config({path: './config/config.env'})

const app = express()

// Dev Logging Middleware
if(process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'))
}

// Mount Routers
app.use('/api/v1/bootcamps', bootcamps)

const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Server running in port ${process.env.NODE_ENV} mode on port ${PORT}`))
