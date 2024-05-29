import React from "react";
import HeroBanner from "../../components/HeroBanner/HeroBanner";
import Lookingfor from "../../components/LookingFor/Lookingfor";
import Bigno from "../../components/Bigno/Bigno";
import Whyenzuger from "../../components/WhyEnzuger/Whyenzuger";
import IndulEvery from "../../components/IndEvery/IndulEvery";
import TrustByInd from "../../components/TrustByInd/TrustByInd";
import Order from "../../components/Order/Order";
import FBanner from "../../components/FamilyBanner/FBanner";

function Home() {
  return (
    <>
      <HeroBanner />
      <Lookingfor />
      <Bigno />
      <Whyenzuger />
      <div className="con">
        <FBanner />
      </div>
      <IndulEvery />
      <TrustByInd />
      <Order />
    </>
  );
}

export default Home;
