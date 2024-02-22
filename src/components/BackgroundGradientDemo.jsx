import React from "react";
import { BackgroundGradient } from "../utils/ui/background-gradient";

export function BackgroundGradientDemo({ data }) {
  // Check if data exists and contains the 'name' property before accessing it
  const name = data && data.name ? data.name : 'Default Name';
  const description = data && data.description ? data.description : 'Default Description';
  const url = data && data.url ? data.url : '#';

  return (
    <div>
      <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900">
        
        <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
          {name}
        </p>
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          {description}
        </p>
        <button className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
          <a href={url} target="_blank" rel="noopener noreferrer">
            <span>Visit Exchange</span>
          </a>
        </button>
      </BackgroundGradient>
    </div>
  );
}
