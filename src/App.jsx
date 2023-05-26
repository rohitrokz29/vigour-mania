/* Dependencies*/
import React ,{ useState } from 'react';
import {createBrowserRouter,createRoutesFromElements,Route,RouterProvider} from 'react-router-dom';

/* Import Pages */
import Home from './components/pages/Home';
import Explore from './components/pages/Explore'
import Features from './components/pages/Features';
import Contacts from './components/pages/Contacts';
import Accounts from './components/pages/Accounts';
/* Components */
import Navbar from './components/Navbar';




const router=createBrowserRouter(
createRoutesFromElements(
  <Route path="/" element={<Navbar/>}>
    <Route >
      <Route path="/" element={<Home/>} />
      <Route path="/features" element={<Features/>} />
      <Route path="/contacts" element={<Contacts/>}/>
    </Route>    
    <Route path="/explore" element={<Explore/>} />
    <Route path="/signin" element={<Accounts/>}/>
    <Route path="/signup" element={<Accounts/>}/>
    
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
