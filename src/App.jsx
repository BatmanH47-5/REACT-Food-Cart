import {BrowserRouter, Route, Routes} from "react-router-dom";
import './App.css';
import { Header } from './Components/Header';
import { Home } from "./Components/Home";
import { Viewcart } from "./Components/Viewcart";
import { useState } from "react";
import { cartContext } from "./Components/CartContext";

function App() {
  const [cart,setCart] = useState([]);
  return (
    <cartContext.Provider value={{cart,setCart}}>
      <BrowserRouter>
      <Header cart={cart}/>
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/Cart" element={<Viewcart />}/>
        </Routes>
      </div>
      </BrowserRouter>
      </cartContext.Provider>
  );
};

export default App;