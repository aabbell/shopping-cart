export default function Card({title, image, price, onAddToCart, product }){
    return(
        <div className="card" style={{ width: "18rem"}}>
        <img src={image} className="card-img-top" alt="the image from the api"/>
       <div className="card-body">
       <h5 className="card-title">{title}</h5>
        <p className = "sign plus">+</p>
        <div className="number"></div>
        <p className="sign minus">-</p>
        <p>Price: ${price}</p>
        <button onClick ={() => onAddToCart(product)} className="btn btn-primary">Add to Cart</button>
        </div>
        </div>
    )
}