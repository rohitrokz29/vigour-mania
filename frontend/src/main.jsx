import React from 'react';
import ReactDOM from 'react-dom/client';

//App.js contains main browser router
import App from './App.jsx';
//general  component style in app
import './index.css';
//user context to save state of user in app
import { UserState } from './components/context/userContext.jsx';

// creating react element and rendering in html page with html element of  id "root"
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserState>
      <App />
    </UserState>
  </React.StrictMode>
)
