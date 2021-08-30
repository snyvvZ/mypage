import React from "react";
import MainUser from "./MainUser";
import MainUtil from "./MainUtil";
import mainData from "../../mainData";

const main = mainData.data.contents;
const userData = main.find((item) => item.type === "loginProfile");
const UtilData = main.find((item) => item.type === "profileSub");

const Main = () => {
  return (
    <>
      <MainUser data={userData} />
      <MainUtil data={UtilData} />
    </>
  );
};

export default Main;
