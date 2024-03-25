require('dotenv').config()
require('express-async-errors')

const express = require('express')
const cors = require('cors')

const restaurantRouter = require('./routes/restaurants')
const notFoundMiddleWare = require('./middlewares/not-found')
const errorHandlerMiddleWare = require('./middlewares/error-handler')

const app = express()

app.use(cors())
app.use(express.json())



app.use('/api/v1/Restaurants',restaurantRouter)
app.use(notFoundMiddleWare)
app.use(errorHandlerMiddleWare)

const port = process.env.PORT || 5000

const start = async () => 
{
    try 
    {
        app.listen(port, () => 
        {
            console.log(`Server Listening on Port ${port}`)
        })
        
    } catch (error) {

        console.log(error)
    }
}

start()