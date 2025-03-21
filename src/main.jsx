import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
import HomePage from './components/HomePage.jsx'
import ShopPage from './components/ShopPage.jsx'
import Nav from './components/Nav.jsx'
import Cart from './components/Cart.jsx'



const router = createBrowserRouter([
  {
    path: "/HomePage",
    element: (
      <>
    <Nav/>
    <HomePage/>
    </>

    )
  
  },
  {
    path: "/Cart",
    element: (
    <>
    <Nav/>
    <Cart/>
    </>
    )
  },
  {
    path: "/ShopPage",
    element:( 
     <>
     <Nav/>
     <ShopPage/>
      </>
    )
  }
]) 


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router = {router} />
  </StrictMode>,
)