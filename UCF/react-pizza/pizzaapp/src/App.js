import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "./pages/menu/Menu";
import Home from "./pages/home/Home";

import './App.css';
import { Navbar } from "react-bootstrap";

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route  element={<Home/>} />
        <Route path='menu' element={<Menu/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
