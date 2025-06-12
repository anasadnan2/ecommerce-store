// src/pages/pages/cart/index.tsx


import HeaderTitle from "../../../components/HeaderTitle";
import Navbar from "../../../components/Navbar";

function index() {
  return (
    <div>
      <Navbar />
      <HeaderTitle title="CART" locationPage="PAGE => CART" />
    </div>
  );
}

export default index;
