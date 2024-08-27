import React, { useEffect, useState } from "react";
import fourImage from "../assets/four.png";

const texts = ["React", "MERN", "AWS", "Python", "Data Science", "UI/UX"];

const HeroSection = () => {
  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const text = texts[index];
    const typingSpeed = 100;
    const delay = 1500;

    const typingInterval = setInterval(() => {
      setDisplayText((prev) => text.substring(0, charIndex + 1));
      setCharIndex((prev) => prev + 1);
    }, typingSpeed);

    if (charIndex === text.length) {
      clearInterval(typingInterval);
      setTimeout(() => {
        setCharIndex(0);
        setIndex((prev) => (prev + 1) % texts.length);
      }, delay);
    }

    return () => clearInterval(typingInterval);
  }, [charIndex, index]);

  return (
    <div className="flex flex-col md:flex-row items-center lg:items-start justify-center gap-8 min-h-fit mt-4">
      <div className="flex-1 max-w-sm md:max-w-md lg:max-w-lg">
        <img
          src={fourImage}
          alt="home"
          className="w-full h-auto rounded-xl transition-transform duration-500 ease-in-out transform hover:scale-105"
        />
      </div>
      <div className="flex-1 max-w-xl mt-4 lg:mt-24">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
          Unlock Your Potential with Education
        </h1>
        <p className="text-lg  mb-6 leading-relaxed">
          Education is the key to success. It empowers you with knowledge,
          skills, and critical thinking that open doors to endless
          opportunities. Whether you're learning new skills, exploring different
          fields, or pursuing higher education, the journey of learning is one
          of the most fulfilling experiences. Embrace education as a lifelong
          pursuit and watch yourself grow beyond limits.
        </p>
        <div className="text-xl md:text-2xl lg:text-3xl font-semibold">
          <span className="mr-2">Learn technologies like:</span>
          <span className="font-mono text-accent">{displayText}</span>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
