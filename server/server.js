require('dotenv').config()

const express = require('express')

const app = express()

app.use(express.json())


app.get('/api/v1/restaurants',(req,res) => {
    res.status(200).json({msg: "get all restaurants"})
})

app.get('/api/v1/restaurants/:id',(req,res) => 
{
    const {id:restaurantsID} = req.params
    res.status(200).json({msg: `get restaurants with id ${restaurantsID}`})
})

app.post('/api/v1/restaurants',(req,res) => 
{
    const {body} = req
    res.status(201).json({body})
})

app.put('/api/v1/restaurants/:id',(req,res) => 
{
    const {id:restaurantsID} = req.params
    const {body} = req
    res.status(200).json({restaurantsID,body})
})

app.delete('/api/v1/restaurants/:id',(req,res) => 
{
    const {id:restaurantsID} = req.params
    res.status(200).json({msg: `delete restaurants with id ${restaurantsID}`})
})


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