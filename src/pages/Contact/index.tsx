// src/pages/contact/index.tsx

import AnyQuestions from "../../components/AnyQuestions";
import ContactInfo from "../../components/ContactInfo";
import Footer from "../../components/Footer";
import HeaderTitle from "../../components/HeaderTitle";
import Navbar from "../../components/Navbar";
import OurStores from "../../components/OurStores";
import ShopOurInstaSection from "../../components/ShopOurInstaSection";
import SubscribeSection from "../../components/SubscribeSection";

function Index() {
  return (
    <div>
      <Navbar />
      <HeaderTitle title="CONTACT" />
      <div
        style={{
          position: "relative",
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "row",
          padding: "20px 0",
          gap: "30px",
        }}
      >
        <ContactInfo />
        <AnyQuestions />
      </div>
      <div style={{display:"flex",flexDirection:"column",width:"100%", gap:"50px"}}>
        <OurStores />
        <SubscribeSection />
        <ShopOurInstaSection title="SHOP OUR INSTA" />
        <Footer />
      </div>
    </div>
  );
}

export default Index;
