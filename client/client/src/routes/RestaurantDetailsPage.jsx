import {React, useContext, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { RestaurantsContext } from '../context/RestaurantsContext';
import RestaurantsFinder from '../apis/RestaurantsFinder';
import StarRating from '../components/StarRating';
import Reviews from '../components/Reviews';
import AddReview from '../components/AddReview';

const RestaurantDetailsPage = () => {

  const {id} = useParams();
  const {selectedRestaurant, setSelectedRestaurant} = useContext(RestaurantsContext)


  useEffect( () => {
    const fetchData = async () => {
      
      try 
      {
        const respose = await RestaurantsFinder.get(`/${id}`);
        const restaurant = respose.data.data
        setSelectedRestaurant(restaurant)
        
      } 
      catch (error) 
      {
        console.log(error)
        
      }

    }
    fetchData()
  },[])

  return (
    <div>
       {selectedRestaurant && (
        <>
          <h1 className='text-center display-1'> {selectedRestaurant.restaurant.name} </h1>
          <div className='text-center'><StarRating rating={selectedRestaurant.restaurant.average_rating}/></div>
          <div className="text-center text-warning ml-1">
              {selectedRestaurant.restaurant.count ? `(${selectedRestaurant.restaurant.count})`  : "(0)"}
          </div>
          <div className='mt-3'>
            <Reviews reviews={selectedRestaurant.reviews}/>
          </div>
          <AddReview/>
        </>
       )}
    </div>
  )
}

export default RestaurantDetailsPage
