require('dotenv').config()

const express = require('express')
const query = require('./db')

const app = express()

app.use(express.json())


app.get('/api/v1/restaurants', async (req,res) => 
{
    try 
    {
        const results = await query('SELECT * FROM restaurants')

        const restaurants = results.rows

        res.status(200).json({
            status:'success',
            restaurantsNum: restaurants.length,
            data: {restaurants}
        })
        
    } 
    catch (error) 
    {
        console.log(error)
        
    }
})

app.get('/api/v1/restaurants/:id', async (req,res) => 
{
    try 
    {
        const {id:restaurantsID} = req.params

        const result = await query(`SELECT * FROM restaurants WHERE id = $1`,[restaurantsID])

        const restaurant = result.rows

        res.status(200).json({
            status:'success',
            restaurantsNum: restaurant.length,
            data: {restaurant}
        })
        
    } 
    catch (error) 
    {
        console.log(error)
        
    }
})

app.post('/api/v1/restaurants', async (req,res) => 
{
    try 
    {
        const {name,location,price_range} = req.body

        if(!name || !location || !price_range)
            throw new Error("Bad Request");

        const results = await query('INSERT INTO restaurants (name,location,price_range) VALUES ($1,$2,$3) RETURNING *',
        [name,location,price_range])

        const restaurant = results.rows[0]

        res.status(201).json({
            status:'success',
            data: {restaurant}
        })

    } 
    catch (error) 
    {
        console.log(error)   
    }
})

app.put('/api/v1/restaurants/:id',async (req,res) => 
{
    try 
    {
        const {id:restaurantID} = req.params
        const {name,location,price_range} = req.body

        if(!name || !location || !price_range)
            throw new Error("Bad Request")

        const result = await query('UPDATE restaurants SET name = $1, location = $2, price_range = $3 WHERE id = $4 RETURNING *',
        [name,location,price_range,restaurantID]
        )
        const restaurant = result.rows[0]

        res.status(200).json({
            status:'success',
            data: {restaurant}
        })
    } 
    catch (error) 
    {
        console.log(error)
    }
})

app.delete('/api/v1/restaurants/:id', async (req,res) => 
{
    try 
    {
        const {id:restaurantsID} = req.params

        const result = await query(`DELETE FROM restaurants WHERE id = $1`,[restaurantsID])


        res.status(200).json({
            status:'success',
        })
        
    } 
    catch (error) 
    {
        console.log(error)
        
    }
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