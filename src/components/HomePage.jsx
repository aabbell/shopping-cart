import ShopPage from "./ShopPage";
import { useNavigate } from "react-router-dom";
export default function HomePage(){
    const navigate = useNavigate()

    const handleButtonClick = () => {
        navigate('/ShopPage')
    }
    return(  
        <div>
            <h1>Home Page</h1>
            <button onClick={handleButtonClick}>Shop Now</button>
            <div>
            Discover the latest trends, must-have essentials, and unbeatable
             deals all in one place! Whether you're looking for fashion, 
             electronics, home essentials, or gifts for your loved ones, 
             we've got something for everyone.
             </div>
        </div>
    )
}