import React, { useEffect, useState } from "react";
import fourImage from "../assets/four.png";

const texts = ["React", "MERN", "AWS"];

const Home = () => {
  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const text = texts[index];
    const typingSpeed = 100; // Typing speed in milliseconds

    const interval = setInterval(() => {
      setDisplayText((prev) => text.substring(0, charIndex + 1));
      setCharIndex((prev) => prev + 1);

      if (charIndex + 1 > text.length) {
        clearInterval(interval);
        setTimeout(() => {
          setCharIndex(0);
          setIndex((prev) => (prev + 1) % texts.length);
        }, 1500); // Pause before starting next text
      }
    }, typingSpeed);

    return () => clearInterval(interval);
  }, [charIndex, index]);

  return (
    <div className="flex flex-col md:flex-row items-center lg:items-start justify-center  gap-8  min-h-screen">
      <div className="flex-1 max-w-sm md:max-w-md lg:max-w-lg">
        <img src={fourImage} alt="home" className="w-full h-auto rounded-xl " />
      </div>
      {/* <div className="flex-1 max-w-lg ">
        <h1 className="text-4xl md:text-5xl font-extrabold  mb-6">
          Unlock Your Potential with Education
        </h1>
        <p className="text-lg text-gray-600 mb-6 leading-relaxed">
          Education is the key to success. It empowers you with knowledge,
          skills, and critical thinking that open doors to endless
          opportunities. Whether you're learning new skills, exploring different
          fields, or pursuing higher education, the journey of learning is one
          of the most fulfilling experiences. Embrace education as a lifelong
          pursuit and watch yourself grow beyond limits.
        </p>
        <div className="text-xl font-semibold text-accent">
          <span className="mr-2">Learn technologies like:</span>
          <span className="font-mono">{displayText}</span>
        </div>
      </div> */}
    </div>
  );
};

export default Home;
