import React from "react";
import { BackgroundGradientDemo } from "./BackgroundGradientDemo";
import hero from '../img/hero-banner.png';

const DummyData = [
  {
    image: '../img/hero-banner.png',
    title: "Title 1",
    description: "lorem ipsum dolor sit amet, consectetur adipiscing elit.lorem ipsum dolor sit amet, consectetur adipiscing elit.lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
    buttonText: "Button 1"
  },
  {
    image: '../img/hero-banner.png',
    title: "Title 2",
    description: "Description 2 lorem ipsum dolor sit amet, consectetur adipiscing elit.lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    buttonText: "Button 2"
  }
];

const CardList = () => {
    return (
      <div className="flex justify-center space-x-8">
        {DummyData.map((data, index) => {
          console.log("Current Data:", data); // Add this line to check the current data being passed
          return <BackgroundGradientDemo key={index} {...data} />;
        })}
      </div>
    );
  };

export default CardList;
