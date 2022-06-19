import React, { useEffect } from "react";

const Banner = ({ bannerContent, closeBanner }) => {
  useEffect(() => {
    setTimeout(() => {
      closeBanner();
    }, 3000);
  });
  return (
    <div>
      <p>{bannerContent}</p>
    </div>
  );
};

export default Banner;
