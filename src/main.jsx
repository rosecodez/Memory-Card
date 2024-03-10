import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import CreateHeader from './Components/Header.jsx'
import ImagesContainer from './Components/ImagesContainer.jsx'
import Scoreboard from './Components/Scoreboard.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CreateHeader />
    <Scoreboard />
    <ImagesContainer />
  </React.StrictMode>,
)
