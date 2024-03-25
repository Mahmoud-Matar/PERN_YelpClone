import {React} from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import HomePage from './routes/HomePage'
import RestaurantDetailsPage from './routes/RestaurantDetailsPage'
import UpdateRestaurant from './routes/UpdateRestaurantPage'
import { RestaurantsContextProvider } from './context/RestaurantsContext'

const App = () =>
{
    return (
    
    <RestaurantsContextProvider>
        <div className='container'>
        <Router>
            <Routes>
                <Route exact path = "/" Component={HomePage}/>
                <Route exact path = "/restaurants/:id" Component={RestaurantDetailsPage}/>
                <Route exact path = "/restaurants/:id/update" Component={UpdateRestaurant}/>                
            </Routes>
        </Router>
    </div>
    </RestaurantsContextProvider>
    )
}

export default App;
