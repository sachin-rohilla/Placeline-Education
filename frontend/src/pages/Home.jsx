import React, { useEffect, useState } from "react";
import { homeImages } from "../constants/constants";
import fourImage from "../assets/four.png";

const Home = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (homeImages.length === 0) return;

    const intervalId = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * homeImages.length);
      setIndex(randomIndex);
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      {homeImages.length > 0 ? (
        <img
          src={fourImage}
          alt="home"
          className="w-[550px] h-fit object-cover"
        />
      ) : (
        <p>No images available</p>
      )}
    </div>
  );
};

export default Home;
