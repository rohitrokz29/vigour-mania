/* Dependencies*/
import React, { useState } from 'react';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';

/* Import Pages */
import Home from './components/pages/Home/Home';
import Explore from './components/pages/Explore/Explore'
import Features from './components/pages/Home/Features';
import Contacts from './components/pages/Home/Contacts';
import Accounts from './components/pages/Accounts';
/* Components */
import Navbar from './components/Navbar';




const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" >
      <Route element={<Navbar />}>
        <Route exact path="/" element={<Home />} />

        <Route path="/signin" element={<Accounts />} />
        <Route path="/signup" element={<Accounts />} />
      </Route>
      <Route element={<Navbar />}>
        <Route exact path='/explore' element={<Explore />} />
      </Route>

    </Route>
  )
)

function App() {


  return (
    <>
        <RouterProvider router={router} />
        
    </>

  )
}

export default App
