import React, { useState } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import RestaurantsFinder from '../apis/RestaurantsFinder'

const AddReview = () => {
    const {id} = useParams()
    const navigate = useNavigate()
    const location = useLocation()
    const [name, setName] = useState('')
    const [reviewText, setReviewText] = useState('')
    const [rating, setRating] = useState('Rating')

    const handleSubmitReview = async (e) => {
        e.preventDefault()

        try 
        {
            const response = await RestaurantsFinder.post(`/${id}/addReview`,
            {
                name,
                review: reviewText,
                rating
            })

            navigate('/')
            navigate(location.pathname)
        } 
        catch (error) 
        {
            console.log(error)    
        }

    }

  return (
    <div className='mb-2'>
        <form action=''>
            <div className='row'>

                <div className='form-group col-8'>
                    <label htmlFor='name'> Name </label>
                    <input value ={name} onChange = { e => setName(e.target.value)} id='name' placeholder='name' type='text' className='form-control'></input>
                </div>

                <div style={{ marginTop: "3vh" }} className='form-group col-4'>
                    <label htmlFor='rating'> Rating </label>
                    <select value ={rating} onChange = { e => setRating(e.target.value)} id='rating' className='custom-select'>
                        <option disabled> Rating </option>
                        <option value="1"> 1 </option>
                        <option value="2"> 2 </option>
                        <option value="3"> 3 </option>
                        <option value="4"> 4 </option>
                        <option value="5"> 5 </option>
                    </select>
                </div>
            </div>

            <div className='form-group'>
                <label htmlFor='review'> Review </label>
                <textarea value ={reviewText} onChange = { e => setReviewText(e.target.value)} id='Review' className='form-control'></textarea>

            </div>

            <button type="submit" onClick ={handleSubmitReview} style={{ marginTop: "3vh" }} className='btn btn-primary'>Submit</button>

        </form>
      
    </div>
  )
}

export default AddReview
