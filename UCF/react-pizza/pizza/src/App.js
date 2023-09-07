import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home.js";
import Menu from './pages/menu/Menu.js'

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path='menu' element={<Menu />} />
      </Routes>
    </BrowserRouter>
    
    
  );
}

export default App;
