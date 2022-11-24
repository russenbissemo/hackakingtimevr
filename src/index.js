import React from 'react';
import ReactDOM from 'react-dom/client';
import Card from './Card';
import "./Card.css";
import "./Main.css";
import reportWebVitals from './reportWebVitals';
import 'typeface-quicksand';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Card />
  </React.StrictMode>
);