const {StatusCodes} =  require('http-status-codes')
const {NotFoundError,BadRequestError} = require('../errors')
const query = require('../db')


const getAllRestaurants =  async (req,res) => 
{
    const results = await query('SELECT * FROM restaurants LEFT JOIN (SELECT restaurant_id, COUNT(*), TRUNC(AVG(rating),1) AS average_rating FROM reviews GROUP BY restaurant_id) reviews on restaurants.id = reviews.restaurant_id')
    
    const restaurants = results.rows
    
    res.status(StatusCodes.OK).json({
        status:'success',
        restaurantsNum: restaurants.length,
        data: {restaurants}
    })
}

const getRestaurant =  async (req,res) => 
{
    const {id:restaurantID} = req.params
    
    const result = await query(`SELECT * FROM restaurants LEFT JOIN (SELECT restaurant_id, COUNT(*), TRUNC(AVG(rating),1) AS average_rating FROM reviews GROUP BY restaurant_id) reviews on restaurants.id = reviews.restaurant_id WHERE id = $1`,[restaurantID])
    const result2 = await query(`SELECT * FROM reviews WHERE restaurant_id = $1`,[restaurantID])
    
    const restaurant = result.rows[0]
    const reviews = result2.rows
    
    if(!restaurant)
        throw new NotFoundError(`No restaurant with id = ${restaurantID}`)


    res.status(StatusCodes.OK).json({
        status:'success',
        data: {
            restaurant,
            reviews
        }
    })
        
}

const addRestaurant = async (req,res) => 
{
    
    const {name,location,price_range} = req.body

    if(!name || !location || !price_range)
        throw new BadRequestError('Please Provide Restaurant Info')

    const results = await query('INSERT INTO restaurants (name,location,price_range) VALUES ($1,$2,$3) RETURNING *',
    [name,location,price_range])

    const restaurant = results.rows[0]

    res.status(StatusCodes.CREATED).json({
        status:'success',
        data: {restaurant}
    })

    
}

const updateRestaurant = async (req,res) => 
{
    
    const {id:restaurantID} = req.params
    const {name,location,price_range} = req.body

    if(!name || !location || !price_range)
        throw new BadRequestError('Please Provide Restaurant Info')

    const result = await query('UPDATE restaurants SET name = $1, location = $2, price_range = $3 WHERE id = $4 RETURNING *',
    [name,location,price_range,restaurantID]
    )

    const restaurant = result.rows[0]

    res.status(StatusCodes.OK).json({
        status:'success',
        data: {restaurant}
    })
    
}

const deleteRestaurant = async (req,res) => 
{
  
    const {id:restaurantsID} = req.params

    const result = await query(`DELETE FROM reviews WHERE restaurant_id = $1`,[restaurantsID])
    const result3 = await query(`DELETE FROM restaurants WHERE id = $1`,[restaurantsID])

    res.status(200).json({
        status:'success',
    })
        
}

const addReview = async (req, res) => {

    
    const{id:restaurantId} = req.params
    const{name,review,rating} = req.body

    const result = await query(`INSERT INTO reviews (restaurant_id, name, review, rating) VALUES ($1, $2, $3, $4) RETURNING *`,
    [restaurantId,name,review,rating])
    
    const newReview = result.rows[0];

    if(!newReview)
        throw new BadRequestError("Please Provide Your Review")
    
    res.status(201).json({
        status:'success',
        data: {newReview}
    })
        
   

}

module.exports = {
    getAllRestaurants,
    getRestaurant,
    addRestaurant,
    updateRestaurant,
    deleteRestaurant,
    addReview
}
