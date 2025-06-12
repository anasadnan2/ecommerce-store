// src/pages/about/index.tsx

import Navbar from "../../components/Navbar";
import HeaderTitle from "../../components/HeaderTitle";
import FeaturesSection from "../../components/FeaturesSection";
import StoryIntroSection from "../../components/StoryIntroSection";
import Testimonial from "../../components/Testimonial";
import SubscribeSection from "../../components/SubscribeSection";

import ShopOurInstaSection from "../../components/ShopOurInstaSection";
import Footer from "../../components/Footer";

function index() {
  return (
    <div>
      <Navbar />

      <HeaderTitle title="ABOUT US" />
      <FeaturesSection />
      <StoryIntroSection />
      <Testimonial
        text="Tempus oncu enim pellen tesque este pretium in neque, elit morbi sagittis lorem habi mattis. Pellen tesque pretium feugiat vel morbi."
        author="Anas Adnan"
      />

      <SubscribeSection />
      <ShopOurInstaSection title="SHOP OUR INSTA" />
      <Footer />
    </div>
  );
}

export default index;
