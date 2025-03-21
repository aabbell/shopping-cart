import Card from './card.jsx'
import { useEffect, useState } from 'react'
export default function ShopPage(){
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

    useEffect(() => {
        if (products.length > 0) {
          products.forEach(product => {
            console.log(product.title);
          });
        }
      }, [products]);
    

    return (
        <div>
        {products.map((product) =>(
            <div key = {product.id}>
        <Card  description = {product.description} title = {product.title} image = {product.image} price = {product.price}/>
            </div>
        ) )}
        </div>
    )
}