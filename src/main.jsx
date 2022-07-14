import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";

import TwitterApp from './TwitterApp'

import './styles.css';


ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>

      <BrowserRouter>
        <TwitterApp />
      </BrowserRouter>

  // </React.StrictMode>
)

