import { HoverEffect } from "../utils/ui/card-hover-effect";
import React, { useState, useEffect } from 'react';
import { FaSpinner } from 'react-icons/fa';



export function CardHoverEffectDemo() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: "Coins List & Categories",
    description:
      "Our Coin List provides a comprehensive cryptocurrency overview, while Coin Categories classify coins for efficient exploration, empowering informed investment decisions.",
    link: "",
  },
  {
    title: "Coin Market Cap & Exchanges",
    description:
      "Our Coin Market Cap feature offers real-time cryptocurrency market capitalization data, complemented by insights into cryptocurrency trading platforms in our Exchanges feature.",
    link: "",
  },
  {
    title: "Asset Platforms & NFTs",
    description:
      "Our Asset Platforms feature serves as a hub for exploring investment platforms, while NFTs offer insights into the dynamic world of non-fungible tokens.",
    link: "",
  },
  {
    title: "Derivatives Exchanges & Derivatives",
    description:
      "Our Derivatives Exchanges enable sophisticated trading strategies, while Derivatives offer diverse investment opportunities through asset-derived instruments.",
    link: "",
  },
  {
    title: "Trending Coins & Exchange Rates",
    description:
      "Our TrendingCoins feature highlights popular cryptocurrencies, while ExchangeRates provides up-to-date currency conversion information.",
    link: "",
  },
  {
    title: "Global Data & News",
    description:
      "Our Global Data feature provides comprehensive insights into global market metrics. Additionally, our News feature delivers timely updates on market developments and trends, keeping users ahead in the financial landscape.",
    link: "",
  },
];

