import React from 'react'
import "./Styles/SCSS/Style.css"
import Navbar from './Components/Navbar/Navbar';
import Sitebar from './Components/Sitebar/Sitebard';
import { BrowserRouter } from 'react-router-dom';
import DashboardContentRouter from './Router/DashboardContentRouter';

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Sitebar/>
      <DashboardContentRouter/>
    </BrowserRouter>
  );
}

export default App;
