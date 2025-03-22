import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HashRouter,Routes,Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import HomePage from "./components/HomePage.jsx";
import ShopPage from "./components/ShopPage.jsx";
import Nav from "./components/Nav.jsx";
import Cart from "./components/Cart.jsx";


createRoot(document.getElementById("root")).render(
  <StrictMode>
     <HashRouter>
      <Nav />
      <Routes>
        <Route path="/HomePage" element={<HomePage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/ShopPage" element={<ShopPage />} />
      </Routes>
    </HashRouter>
  </StrictMode>
);
