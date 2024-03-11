import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import CreateHeader from './Components/Header.jsx'
import Scoreboard from './Components/Scoreboard.jsx'
import AddImage from './Components/Image.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CreateHeader />
    <Scoreboard />
    <AddImage />
  </React.StrictMode>,
)
