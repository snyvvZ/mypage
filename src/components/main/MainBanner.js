import React from "react";

const MainBanner = ({ data }) => {
  const banner = data.contents;

  if (banner.length === 0) {
    return null;
  } else if (banner.length === 1) {
    return <div>banner 1</div>;
  } else {
    return (
      <div>Swiper</div>
    );
  }
};

export default MainBanner;
