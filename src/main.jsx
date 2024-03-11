import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CreateHeader from './Components/Header.jsx';
import AddImage from './Components/Image.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CreateHeader />
    <AddImage />
  </React.StrictMode>
);
