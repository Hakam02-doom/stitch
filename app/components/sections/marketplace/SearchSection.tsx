"use client";

import { useState } from "react";

export default function SearchSection() {
  const [service, setService] = useState("");
  const [location, setLocation] = useState("");
  const [category, setCategory] = useState("All Categories");

  return (
    <div className="flex flex-col gap-6 p-6 border rounded-xl border-gray-200 dark:border-[#27353a] bg-white dark:bg-[#1b2428]/50">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <label className="flex flex-col w-full">
          <p className="text-black dark:text-white text-sm font-medium leading-normal pb-2">Service or Professional</p>
          <div className="relative">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-[#9ab3bc]">search</span>
            <input
              className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-black dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-gray-300 dark:border-[#394f56] bg-background-light dark:bg-[#1b2428] h-12 placeholder:text-gray-400 dark:placeholder:text-[#9ab3bc] pl-10 pr-4 text-base font-normal leading-normal"
              placeholder="Search for a service..."
              value={service}
              onChange={(e) => setService(e.target.value)}
            />
          </div>
        </label>
        <label className="flex flex-col w-full">
          <p className="text-black dark:text-white text-sm font-medium leading-normal pb-2">Location</p>
          <div className="relative">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-[#9ab3bc]">location_on</span>
            <input
              className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-black dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-gray-300 dark:border-[#394f56] bg-background-light dark:bg-[#1b2428] h-12 placeholder:text-gray-400 dark:placeholder:text-[#9ab3bc] pl-10 pr-4 text-base font-normal leading-normal"
              placeholder="Enter city or zip code"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>
        </label>
        <label className="flex flex-col w-full">
          <p className="text-black dark:text-white text-sm font-medium leading-normal pb-2">Category</p>
          <div className="relative">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-[#9ab3bc]">category</span>
            <select
              className="form-select flex w-full appearance-none min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-black dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-gray-300 dark:border-[#394f56] bg-background-light dark:bg-[#1b2428] h-12 pl-10 pr-8 text-base font-normal leading-normal"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option>All Categories</option>
              <option>Home Inspectors</option>
              <option>Mortgage Brokers</option>
              <option>Real Estate Lawyers</option>
              <option>Photographers</option>
            </select>
            <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-[#9ab3bc] pointer-events-none">expand_more</span>
          </div>
        </label>
      </div>
      <div className="flex justify-end">
        <button className="flex min-w-[120px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 gap-2 bg-primary text-white dark:text-[#101618] text-base font-bold leading-normal tracking-[0.015em] hover:opacity-90 transition-opacity">
          <span className="material-symbols-outlined">search</span>
          <span className="truncate">Search</span>
        </button>
      </div>
    </div>
  );
}

