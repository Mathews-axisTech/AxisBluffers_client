import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './global.css';
import {BackgroundImage} from './components/styles';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BackgroundImage src='/images/BG.png' alt='bg' style={{ zIndex: -1 }}/>
    <App />
  </React.StrictMode>
);

