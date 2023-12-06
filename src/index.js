import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import Cartfunction from './Components/Context/Context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <Cartfunction>
  <BrowserRouter>
    <App />
  </BrowserRouter>
</Cartfunction>
);
