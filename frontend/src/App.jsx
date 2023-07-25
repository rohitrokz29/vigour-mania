/* Dependencies*/
import React, { Suspense, lazy } from 'react';
import { Route, Routes, Navigate, BrowserRouter } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar'
//importing Components lazily
const Home = lazy(() => import('./components/pages/Home/Home'));
const Explore = lazy(() => import('./components/pages/Explore/Explore'));
const Accounts = lazy(() => import('./components/pages/Accounts/Accounts'));
const Navbar = lazy(() => import('./components/Navbar/Navbar'));
const Profile = lazy(() => import('./components/pages/user/Profile/Profile'));
const Tracks = lazy(() => import('./components/pages/user/graphs/Tracks'));
const Error = lazy(() => import('./components/pages/ErrorPage/Error'));
const Notebook = lazy(() => import('./components/pages/user/Notebook/Notebook'));
const Journals = lazy(() => import('./components/pages/journals/Journals'));
const Report = lazy(() => import('./components/pages/Report/Report'))
//custom hooks  
import { useUserContext } from './components/hooks/useUserContext';
//contexts to store chart and notes state
import { ChartState } from './components/context/chartContext';
import { NotebookState } from './components/context/notebookContext';
import { JournalState } from './components/context/JournalsContext';
import FallbackComp from './components/cards/FallbackComp';


function App() {
  /**
   * isSignedIn--> tells the state of user if signed in or not
   * user--> current user state data
   * progress and setProgress --> to use and top loading bar progress 
   * 
   */
  const { isSignedIn, user, progress, setProgress } = useUserContext();
  return (
    <>
      {/* top loading bar */}
      <LoadingBar
        height={3}
        color='#FF0000'
        shadow={true}
        style={{
          boxShadow: '2px 2px 5px #000'
        }}
        progress={progress}
      />
      {/* Browser Router */}
      <BrowserRouter>
        <Routes>
          <Route path="/" >
            <Route element={isSignedIn ? <Navigate to="/explore" replace /> :
              <Suspense fallback={<FallbackComp />}>
                <Navbar />
              </Suspense>} >

              <Route exact path="/" element={
                <Suspense fallback={<FallbackComp />}>
                  <Home />
                </Suspense>} />

              <Route path="/signin" element={
                <Suspense fallback={<FallbackComp />}>
                  <Accounts />
                </Suspense>} />

              <Route path="/signup" element={
                <Suspense fallback={<FallbackComp />}>
                  <Accounts />
                </Suspense>} />
            </Route>

            <Route element={
              <Suspense fallback={<FallbackComp />}>
                <Navbar
                  isSignedIn={isSignedIn}
                  username={user ? user.username : null} />
              </Suspense>
            }
            >
              <Route exact path='/explore' element={
                <Suspense fallback={<FallbackComp />}>
                  <Explore />
                </Suspense>} />


              <Route path='/user/:username' element={
                <Suspense fallback={<FallbackComp />}>
                  <Profile />
                </Suspense>} />


              <Route path='/my-trackers' element={
                isSignedIn ?
                  <Suspense fallback={<FallbackComp />}>
                    <ChartState>
                      <Tracks />
                    </ChartState>
                  </Suspense>
                  : <Navigate to='/signin' replace />
              } />


              <Route path='/my-notebooks' element={
                isSignedIn ?
                  <Suspense fallback={<FallbackComp />}>
                    <JournalState>
                      <NotebookState>
                        <Notebook />
                      </NotebookState>
                    </JournalState>
                  </Suspense>
                  : <Navigate to='/signin' replace />
              } />


              <Route exact path='/journals' element={
                isSignedIn ?
                  <JournalState>
                    <Suspense fallback={<FallbackComp />}>
                      <Journals />
                    </Suspense>
                  </JournalState>
                  : <Navigate to='/signin' replace />
              } />

              <Route exact path='/report' element={
                <Suspense fallback={<FallbackComp />}>
                  <Report />
                </Suspense>
              } />

            </Route>
            <Route path="*" element={
              <Suspense fallback={<FallbackComp />} >
                <Error />
              </Suspense>
            } />
          </Route>
        </Routes>
      </BrowserRouter >
    </>
  )

}

export default App
