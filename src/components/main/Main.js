import React from "react";
import MainUser from "./MainUser";
import MainUtil from "./MainUtil";
import MainBanner from "./MainBanner";
import mainData from "../../main";

const main = mainData.data.contents;
const userData = main.find((item) => item.type === "loginProfile");
const utilData = main.find((item) => item.type === "profileSub");
const bannerData = main.find((item) => item.type === "banner");

const Main = () => {
  return (
    <>
      <MainUser data={userData} />
      <MainUtil data={utilData} />
      <MainBanner data={bannerData} />
    </>
  );
};

export default Main;
