/* Dependencies*/
import React, { useState } from 'react';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider,Navigate } from 'react-router-dom';
/* Import Pages */
import Home from './components/pages/Home/Home';
import Explore from './components/pages/Explore/Explore'
import Accounts from './components/pages/Accounts';
/* Components */
import Navbar from './components/Navbar';
import { useUserContext } from './components/hooks/useUserContext';
import { Profile } from './components/pages/user/Profile';



function App() {
  const {isSignedIn,user}=useUserContext();
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" >
        <Route element={isSignedIn? <Navigate to="/explore" replace /> :<Navbar/>} >
          <Route exact path="/" element={<Home />} />
  
          <Route path="/signin" element={ <Accounts />}/>
          <Route path="/signup" element={ <Accounts />}/>
        </Route>
        <Route element={<Navbar isSignedIn={isSignedIn} username={user?user.username:null}/>}>
          <Route exact path='/explore' element={<Explore />} />
          <Route path='/user/:username' element={<Profile/>} />
        </Route>
        <Route path="*"element={<h1>ERORR PAGE</h1>} />
  
      </Route>
    )
  )
  

  return (
    <>
        <RouterProvider router={router} isSignedIn={isSignedIn} />
        
    </>

  )
}

export default App
