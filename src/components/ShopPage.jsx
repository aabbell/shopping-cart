import Card from './card.jsx'
import '../ShopPage.css'
import { useEffect, useState } from 'react'
export default function ShopPage({ onAddToCart }){
    const [products, setProducts] = useState([])
    useEffect(() => {
        async function fetchData(){
            try{
                let response = await fetch("https://fakestoreapi.com/products", {mode: "cors"})
                let data = await response.json()
                setProducts(data)
            }catch(error){
                console.log(error)
            }
        }
        fetchData()
    }, [])  

    return (
        <div className='products'>
        {products.map((product) =>{ 
            
            return(
                <div className= "cards" key = {product.id}>
        <Card title = {product.title} image = {product.image} price = {product.price} onAddToCart={ onAddToCart } product={product}/>
            </div>
            )
            
            
        
        })} 
        
        </div>
    )
}