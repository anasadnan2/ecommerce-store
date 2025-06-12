// src/pages/pages/item/index.tsx

import ItemDescription from "../../../components/ItemDescription";
import Navbar from "../../../components/Navbar";
import { useLocation } from "react-router-dom";
import SubscribeSection from "../../../components/SubscribeSection";
import ShopOurInstaSection from "../../../components/ShopOurInstaSection";
import Footer from "../../../components/Footer";
import RelatedProducts from "../../../components/RelatedProducts";
//بدها شغل جامد لسا 
function Index() {
  const location = useLocation();
  const product = location.state;
  console.log(location);
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "50px" }}>
      <Navbar />
      <ItemDescription product={product} />
      <RelatedProducts />
      <SubscribeSection />
      <ShopOurInstaSection title="SHOP OUR INSTA" />
      <Footer />
    </div>
  );
}

export default Index;
