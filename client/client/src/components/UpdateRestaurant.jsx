import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { RestaurantsContext } from '../context/RestaurantsContext'
import RestaurantsFinder from '../apis/RestaurantsFinder'

const UpdateRestaurant = () => 
{
  const {id} = useParams()
  const {restaurants} = useContext(RestaurantsContext)

  const[name, setName] = useState("");
  const[location, setLocation] = useState("");
  const[priceRange, setPriceRange] = useState("");

  let navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const response = await RestaurantsFinder.get(`/${id}`);
      const {restaurant} = response.data.data
      setName(restaurant.name);
      setLocation(restaurant.location);
      setPriceRange(restaurant.price_range);
    };

    fetchData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault()
    try 
    {
      const response = await RestaurantsFinder.put(`/${id}`,{
        name,
        location,
        price_range: priceRange
      })

      navigate("/")
    } 
    catch (error) 
    {
      console.log(error)
    }
  }


  return (
    <div>
      <form action=''>

        <div className='form-action'>
          <label htmlFor='name'> name </label>
          <input value = {name} onChange = { e => setName(e.target.value)} id='name' className='form-control' type='text'></input>
        </div>

        <div className='form-action'>
          <label htmlFor='location'> location </label>
          <input value = {location} onChange = { e => setLocation(e.target.value)} id='location' className='form-control' type='text'></input>
        </div>

        <div className='form-action'>
          <label htmlFor='price_range'> Price Range </label>
          <input value = {priceRange} onChange = { e => setPriceRange(e.target.value)} id='price_range' className='form-control' min="1" max="5" type='number'></input>
        </div>

        <div className='form-action'>
          <button type='submit' onClick ={handleSubmit} style={{ marginTop: "3vh" }} className='btn btn-primary'>Submit</button>
        </div>

      </form>
    </div>
  )
}

export default UpdateRestaurant
