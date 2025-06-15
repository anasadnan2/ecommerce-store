// src/pages/pages/cart/index.tsx

import CartList from "../../../components/CartList";
import Footer from "../../../components/Footer";
import HeaderTitle from "../../../components/HeaderTitle";
import Navbar from "../../../components/Navbar";
import ShopOurInstaSection from "../../../components/ShopOurInstaSection";
import SubscribeSection from "../../../components/SubscribeSection";

function Index() {
  return (
    <div>
      <Navbar />
      <HeaderTitle title="CART" locationPage="PAGE => CART" />
      <div style={{ display: "flex", flexDirection: "column", gap: "50px" }}>
        <CartList />
        <SubscribeSection />
      </div>
      <ShopOurInstaSection title="SHOP OUR INSTA" />
      <Footer />
    </div>
  );
}

export default Index;
