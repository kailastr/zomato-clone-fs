import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom'

//import pages
import Home from './pages/Home.page';
import Restaurant from './pages/Restaurant.page';
import Checkout from './pages/Checkout.page';
import GoogleAuth from './pages/GoogleAuth.page';

//import components
import Menu from './components/Restaurant/Menu';
import Photos from './components/Restaurant/Photos';
import OrderOnline from './components/Restaurant/OrderOnline'
import Overview from './components/Restaurant/Overview';
import Reviews from './components/Restaurant/Reviews'


function App() {
  return (
    <>
      <Routes>
        {/* if we want to redirect any routes, we could use Navigate function for it */}
        <Route path='/' element={<Navigate to='/delivery' />} />
        {/* inside the delivery page there are certain other types of subsections. To get that we use this route */}
        <Route path='/:type' element={<Home />} />
        {/* <Route path='/restaurant/:id' element={< RedirectRestaurant />} /> */}
        <Route path='/google/:token' element={< GoogleAuth />} />
        {/* Creating subroutes for refreshing only the component without the whole page */}
        <Route path='/restaurant/:id' element={<Restaurant />}>
          <Route path='overview' element={< Overview />} />
          <Route path='order-online' element={< OrderOnline />} />
          <Route path='reviews' element={< Reviews />} />
          <Route path='menu' element={< Menu />} />
          <Route path='photos' element={<Photos />} />
        </Route>
        <Route path='/checkout/orders' element={< Checkout />} />
      </Routes>
    </>
  );
}

export default App;
