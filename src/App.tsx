// src/app.tsx

import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import PageCart from "./pages/Pages/Cart";
import PageItem from "./pages/Pages/Item";
import PageShop from "./pages/Pages/Shop";
import FaqPage from "./pages/Help&Info/FaqPage";
import ReturnsAndRefunds from "./pages/Help&Info/ReturnsPage";
import WarrantyInfo from "./pages/Help&Info/WarrantyPage";
import "./index.css";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import { ProductProvider } from "./context/ProductsContext";
import { CartProvider } from "./context/Cartcontext";

function App() {
  return (
    <>
      <ProductProvider>
        <CartProvider>
          <ThemeProvider theme={theme}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/blogs" element={<Blogs />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/page/cart" element={<PageCart />} />
              <Route path="/page/item" element={<PageItem />} />
              <Route path="/page/shop" element={<PageShop />} />
              <Route path="/Help&Info/faq" element={<FaqPage />} />
              <Route
                path="/Help&Info/returns&refunds"
                element={<ReturnsAndRefunds />}
              />
              <Route
                path="/Help&Info/WarrantyInfo"
                element={<WarrantyInfo />}
              />
            </Routes>
          </ThemeProvider>
        </CartProvider>
      </ProductProvider>
      ,
    </>
  );
}

export default App;
