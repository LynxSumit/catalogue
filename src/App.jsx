import './App.css'
import Navbar from './components/Navbar'
import Card from './components/Card'
import { Box } from '@mui/material'
import Footer from './components/Footer'
import Header from "./components/Header.jsx"
import Login from "./components/Login.jsx"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home.jsx'
import {ToastContainer} from "react-toastify"
import "react-toastify/dist/ReactToastify.css";

function App() {
  

  return (
    <> 
    <BrowserRouter>
<Routes>
<Route path='/login' element={<Login/>}/>
<Route path='/' exact element={<Home/>}/>
</Routes>
     <ToastContainer/>
    </BrowserRouter>
    </>
  )
}

export default App
