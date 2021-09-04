import React from "react";
import mainData from "../../main";
import MainUser from "./MainUser";
import MainUtil from "./MainUtil";
import MainBanner from "./MainBanner";
import MainFAQ from "./MainFAQ";
import MainOrder from "./MainOrder";

const main = mainData.data.contents;
const userData = main.find((item) => item.type === "loginProfile");
const utilData = main.find((item) => item.type === "profileSub");
const bannerData = main.find((item) => item.type === "banner");
const orderData = main.find((item) => item.type === "order");
const orderClaimData = main.find((item) => item.type === "orderClaim");
const orderFAQ = main.find((item) => item.type === "faq");

const Main = () => {
  return (
    <>
      <MainUser data={userData} />
      <MainUtil data={utilData} />
      <MainBanner data={bannerData} />
      <MainOrder data={orderData} />
      <MainOrder data={orderClaimData} />
      <MainFAQ data={orderFAQ} />
    </>
  );
};

export default Main;
