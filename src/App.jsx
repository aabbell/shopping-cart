import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Nav from './components/Nav.jsx'
import HomePage from "./components/HomePage";
import ShopPage from "./components/ShopPage.jsx"
import Cart from "./components/Cart.jsx";

export default function App(){
    const [cart, setCart] = useState([])

    const addToCart = (product) => {
        
        setCart((prevCart) => [...prevCart,product])
    }

    return (
        <>
            <Nav/>
            <Routes>
                <Route path="/HomePage" element = {<HomePage/>}/>
                <Route path="/ShopPage" element = {<ShopPage onAddToCart = {addToCart} />}/>
                <Route path="/cart" element = {<Cart cart = {cart}/>}/>
            </Routes>
            </>
    )


}