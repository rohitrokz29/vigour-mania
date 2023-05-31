import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { UserState } from './components/context/userContext.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <UserState>
        <App />

      </UserState>
  </React.StrictMode>
)
