import React from 'react'
import {Routes, Route} from "react-router-dom";
import './App.css'
import Home from "./components/home/Home.jsx";


function App() {

  return (
    <Routes>
        <Route path='/' element={<Home />}></Route>
    </Routes>
  )
}

export default App
