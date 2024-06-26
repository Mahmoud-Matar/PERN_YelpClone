import React, {useContext, useEffect} from 'react'
import RestaurantsFinder from '../apis/RestaurantsFinder'
import {RestaurantsContext} from '../context/RestaurantsContext'
import { useNavigate  } from "react-router-dom";
import StarRating from './StarRating';


const RestaurantsList = (props) => {
  
  const {restaurants,setRestaurants} =  useContext(RestaurantsContext)

  let navigate  = useNavigate ()

  useEffect(() => {
    const fetchData = async () => {
      try 
      {
        const response = await RestaurantsFinder.get("/")
        setRestaurants(response.data.data.restaurants)
      } 
      catch (error) 
      {
        console.log(error)
      }

    }
    fetchData()
  },[])

  const handleDelete = async (e, id) => 
  {
    e.stopPropagation()
    try 
    {
      await RestaurantsFinder.delete(`/${id}`)
      setRestaurants(restaurants.filter(restaurant => {
        return restaurant.id !== id
      }))
      
    } 
    catch (error) 
    {
      console.log(error) 
    }

  }

  const handleUpdate = (e, id) => {
    e.stopPropagation()
    navigate(`/restaurants/${id}/update`)
  }

  const handleRestaurantsSelect = (id) => {
    navigate(`/restaurants/${id}`)
  }

  const renderRating = (restaurant) => {

    if(!restaurant.count)
    {
      return (
        <span className='text-warning'>0 reviews</span>
      )
    }
    return (
      <>
      <StarRating rating={restaurant.average_rating}/>
      <span className='text-warning ml-1'>({restaurant.count})</span>
      </>
    )
  }


  return (
    <div className='list-group'>
      <table className='table table-hover table-dark'>

        <thead>
          <tr className='bg-primary'>
            <th scope='col'>Restaurnats</th>
            <th scope='col'>Location</th>
            <th scope='col'>Price Range</th>
            <th scope='col'>Ratings</th>
            <th scope='col'>Edit</th>
            <th scope='col'>Delete</th>
          </tr>
        </thead>

        <tbody>
          {
            restaurants && restaurants.map((restaurant)=>{
              return (
                <tr onClick = { () => handleRestaurantsSelect(restaurant.id)} key={restaurant.id}>
                  <td>{restaurant.name}</td>
                  <td>{restaurant.location}</td>
                  <td>{"$".repeat(restaurant.price_range)}</td>
                  <td>{renderRating(restaurant)}</td>
                  <td><button onClick={(e) => handleUpdate(e, restaurant.id)} className='btn btn-warning'>Update</button></td>
                  <td><button onClick={(e) => handleDelete(e, restaurant.id)} className='btn btn-danger'>Delete</button></td>
                </tr>
              );
            })
          }
        </tbody>
      </table>
    </div>
  )
}

export default RestaurantsList
