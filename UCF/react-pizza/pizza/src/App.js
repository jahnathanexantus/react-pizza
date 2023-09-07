import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home.js";
import Pic from "../src/assets/images/pizza.jpg"
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
      </Routes>
    </BrowserRouter>
    
    
  );
}

export default App;
