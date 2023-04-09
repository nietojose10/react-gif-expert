import React from 'react';
import ReactDOM from 'react-dom/client';
import { GifExpertApp } from './GifExpertApp';
import './styles.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  //El modo estricto solo se aplica en desarrollo y sirve para detectar
  //Probblemas con react.
  <React.StrictMode>
    <GifExpertApp />
  </React.StrictMode>
);
