/* Dependencies*/
import React  from 'react';
import {  Route, Routes, Navigate, BrowserRouter } from 'react-router-dom';
/* Import Pages */
import Home from './components/pages/Home/Home';
import Explore from './components/pages/Explore/Explore'
import Accounts from './components/pages/Accounts';
/* Components */
import Navbar from './components/Navbar';
import { useUserContext } from './components/hooks/useUserContext';
import Profile from './components/pages/user/Profile';
import Tracks from './components/pages/user/graphs/Tracks';



function App() {
  const { isSignedIn, user } = useUserContext();
 


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" >
            <Route element={isSignedIn ? <Navigate to="/my-trackers" replace /> : <Navbar />} >
              <Route exact path="/" element={<Home />} />

              <Route path="/signin" element={<Accounts />} />
              <Route path="/signup" element={<Accounts />} />
            </Route>
            <Route element={<Navbar isSignedIn={isSignedIn} username={user ? user.username : null} />}>
              <Route exact path='/explore' element={<Explore />} />
              <Route path='/user/:username' element={<Profile />} />
            <Route path='/my-trackers' element={isSignedIn?<Tracks/>:<Navigate to="/explore" replace /> }/>
            </Route>

            <Route path="*" element={<h1>ERORR PAGE</h1>} />

          </Route>
        </Routes>
      </BrowserRouter>
    </>

  )
}

export default App
