// src/pages/Pages/shop/index.tsx

import HeaderTitle from "../../../components/HeaderTitle";
import Navbar from "../../../components/Navbar";
import ProductList from "../../../components/ProductList";
import ListSerach from "../../../components/ListSerach";
import SubscribeSection from "../../../components/SubscribeSection";
import ShopOurInstaSection from "../../../components/ShopOurInstaSection";
import Footer from "../../../components/Footer";
import RelatedProducts from "../../../components/RelatedProducts";

function Index() {
  return (
    <div>
      <Navbar />
      <HeaderTitle title="SHOP" locationPage="PAGE => SHOP" />
      {/* list and search  */}
      <div
        style={{
          margin: "100px auto",
          padding: "0px 100px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            margin: "100px auto",
            padding: "0px 100px",
            display: "flex",
            justifyContent: "space-between",
            gap: "40px",
          }}
        >
          <div style={{ flex: 3 }}>
            <ProductList />
          </div>
          <div style={{ flex: 1 }}>
            <ListSerach />
          </div>
        </div>
      </div>
      {/* ----------list and search-------  */}
      <div style={{ display: "flex", flexDirection: "column", gap: "50px" }}>
        <RelatedProducts />
        <SubscribeSection />
        <ShopOurInstaSection title="SHOP OUR INSTA" />
        <Footer />
      </div>
    </div>
  );
}

export default Index;
