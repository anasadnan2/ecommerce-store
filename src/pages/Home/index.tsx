// src/pages/Home/index.tsx

import Navbar from "../../components/Navbar";
import FeaturesSection from "../../components/FeaturesSection";

import ProductSlider from "../../components/ProductSlider";
import ProductGrid from "../../components/ProductGrid";
import Testimonial from "../../components/Testimonial";
import SubscribeSection from "../../components/SubscribeSection";
import ShopOurInstaSection from "../../components/ShopOurInstaSection";
import Footer from "../../components/Footer";

function HomePage() {
  return (
    <div>
      <Navbar />

      <ProductSlider iconstate={true} />
      {/* FeaturesSection and {mobile and smart} */}
      <div>
        <FeaturesSection />
        {/* mobile and smart  */}
        <div
          style={{
            gap: "50px",
          }}
        >
          {/* MOBILE PRODUCTS side */}
          <ProductGrid title="MOBILE PRODUCTS" />
          {/* ------MOBILE PRODUCTS side----- */}

          {/* SMART WATCHES side */}
          <ProductGrid title="SMART WATCHES" />

          {/* ------SMART WATCHES side----- */}
        </div>
        {/*--- mobile and smart--  */}
      </div>
      {/* ------FeaturesSection and {mobile and smart} -----*/}
      <ProductSlider deccount="10%" />


      <ProductGrid title="LATEST POSTS" />
      <Testimonial
        text="Tempus oncu enim pellen tesque este pretium in neque, elit morbi sagittis lorem habi mattis. Pellen tesque pretium feugiat vel morbi."
        author="Anas Adnan"
      />
      <SubscribeSection />
      <ShopOurInstaSection title="SHOP OUR INSTA" />
      <Footer />
      {/* </div> */}
    </div>
  );
}

export default HomePage;
