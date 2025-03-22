export default function Cart({ cart }){
    console.log(cart.length)
    console.log(cart);

    return (
        <div>
            <h2> Your Cart</h2>
            {cart.length === 0 ? (<p>Your Cart is Empty.</p>) : 
            (
            <div>
                {cart.map((product, index) => {
                    console.log(product)
                    return(
                    <div key={index} className="cart-item">
                        <h3>{product.title}</h3>
                        <img src = {product.image} width="100"/>
                        <p>Price: {product.price}</p>
                    </div>
                    )
                })}
            </div>
        )}
        </div>
    )
}