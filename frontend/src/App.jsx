/* Dependencies*/
import React, { Suspense, lazy } from 'react';
import { Route, Routes, Navigate, BrowserRouter } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar'
//Components
const Home = lazy(() => import('./components/pages/Home/Home'));
const Explore = lazy(() => import('./components/pages/Explore/Explore'));
const Accounts = lazy(() => import('./components/pages/Accounts'));
const Navbar = lazy(() => import('./components/Navbar'));
const Profile = lazy(() => import('./components/pages/user/Profile'));
const Tracks = lazy(() => import('./components/pages/user/graphs/Tracks'));

//custom hooks
import { useUserContext } from './components/hooks/useUserContext';
//contexts
import { ChartState } from './components/context/chartContext';



function App() {
  const { isSignedIn, user,progress,setProgress } = useUserContext();
  return (
    <>
      <LoadingBar
        height={3}
        color='#FF0000'
        shadow={true}
        style={{
          boxShadow: '2px 2px 5px #000'
        }}
        progress={progress}
     />
      <BrowserRouter>
        <Routes>
          <Route path="/" >
            <Route
              element={
                isSignedIn ? <Navigate to="/my-trackers" replace />
                  :
                  <Suspense>
                    <Navbar />
                  </Suspense>}
            >
              <Route
                exact path="/"
                element={
                  <Suspense>
                    <Home />
                  </Suspense>}
              />

              <Route
                path="/signin"
                element={
                  <Suspense>
                    <Accounts />
                  </Suspense>}
              />
              <Route
                path="/signup"
                element={
                  <Suspense>
                    <Accounts />
                  </Suspense>}
              />
            </Route>
            <Route
              element={
                <Navbar
                  isSignedIn={isSignedIn}
                  username={user ? user.username : null} />}
            >
              <Route exact path='/explore'
                element={
                  <Suspense>
                    <Explore />
                  </Suspense>} />
              <Route path='/user/:username'
                element={
                  <Suspense>
                    <Profile />
                  </Suspense>} />
              <Route path='/my-trackers'
                element={
                  isSignedIn ?
                    <Suspense>
                      <ChartState>
                        <Tracks />
                      </ChartState>
                    </Suspense>
                    : <Navigate to="/signin" replace />}
              />
            </Route>
            <Route path="*" element={<h1>ERORR PAGE</h1>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
