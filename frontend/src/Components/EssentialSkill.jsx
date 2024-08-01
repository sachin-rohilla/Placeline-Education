import React from "react";
import { essentialSkillsData } from "../constants/constants";

const EssentialSkill = () => {
  return (
    <div>
      {essentialSkillsData?.map((item) => (
        <div>
          <img src={item.image} alt="image" />
          <h1>{item.title}</h1>
        </div>
      ))}
    </div>
  );
};

export default EssentialSkill;
