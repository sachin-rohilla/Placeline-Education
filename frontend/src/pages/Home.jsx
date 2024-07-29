import React, { useEffect, useState } from "react";
import fourImage from "../assets/four.png";

const Home = () => {
  return (
    <div>
      <img
        src={fourImage}
        alt="home"
        className="w-[550px] h-fit object-cover"
      />
    </div>
  );
};

export default Home;
