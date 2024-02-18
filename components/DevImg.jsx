import Image from "next/image";
import React from "react";

const DevImg = ({ containerStyles, imgSrc }) => {
  return (
    <div>
      <Image src={imgSrc} fill priority alt="" />
    </div>
  );
};

export default DevImg;
