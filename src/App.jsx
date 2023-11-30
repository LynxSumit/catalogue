import './App.css'
// import Header from "./components/Header.jsx"
import Login from "./pages/Login.jsx"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home.jsx'
import {ToastContainer} from "react-toastify"
import "react-toastify/dist/ReactToastify.css";
import ChangeCatalogue from './pages/ChangeCatalogue.jsx'

function App() {
  

  return (
    <> 
    <BrowserRouter>

<Routes>
<Route path='/' element={<Login/>}/>
<Route path='/home' exact element={<Home/>}/>
<Route path='change-layout' exact element={<ChangeCatalogue/>}/>
</Routes>
     <ToastContainer/>
    </BrowserRouter>
    </>
  )
}

export default App
