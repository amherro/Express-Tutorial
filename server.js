const express = require('express')
const dotenv = require('dotenv')
const connectDB = require('./config/db')
const errorHandler = require('./middleware/error')
const colors = require('colors')

// Load env variables
dotenv.config({path: './config/config.env'})

// Connect to database
connectDB()

// Route Files
const bootcamps = require('./routes/bootcamps')
// Middleware
const morgan = require('morgan')

const app = express()

// Body Parser
app.use(express.json())


// Dev Logging Middleware
if(process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'))
}

// Mount Routers
app.use('/api/v1/bootcamps', bootcamps)

// Error Handler
app.use(errorHandler)


const PORT = process.env.PORT || 5000

const server = app.listen(PORT, console.log(`Server running in port ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold))

// Handle unhandled promise rejections
process.on('unhandledRejection', (err, promise) => {
    console.log(`Error: ${err.message}`.red)
    // Close server and exit process
    server.close(() => process.exit(1))
})