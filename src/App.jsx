/* Dependencies*/
import React ,{ useState } from 'react';
import {createBrowserRouter,createRoutesFromElements,Route,RouterProvider} from 'react-router-dom';

/* Import Pages */
import Home from './components/pages/Home';
import Explore from './components/pages/Explore'
import Features from './components/pages/Features';
import Contacts from './components/pages/Contacts';
import Signin from './components/pages/Signin';

/* Components */
import Navbar from './components/Navbar';




const router=createBrowserRouter(
createRoutesFromElements(
  <Route path="/" element={<Navbar/>}>
    <Route index element={<Home/>}/>
    <Route path="/explore" element={<Explore/>} />
    <Route path="/signin" element={<Signin/>}/>

    
  </Route>
  )
  )

function App() {


  return (
    <>
    <RouterProvider router={router}/>
      
    </>
    
  )
}

export default App
