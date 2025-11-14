"use client";

import { useState } from "react";

export default function CategoryChips() {
  const categories = ["All", "Photographers", "Lawyers", "Stagers", "Home Inspectors", "Mortgage Brokers"];
  const [selectedCategory, setSelectedCategory] = useState("All");

  return (
    <div className="flex gap-3 py-3 overflow-x-auto">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => setSelectedCategory(category)}
          className={`flex h-10 shrink-0 cursor-pointer items-center justify-center gap-x-2 rounded-full px-5 transition-colors ${
            selectedCategory === category
              ? "bg-primary text-white dark:text-[#101618]"
              : "bg-gray-100 dark:bg-[#27353a] text-gray-700 dark:text-white hover:bg-gray-200 dark:hover:bg-[#394f56]"
          }`}
        >
          <p className="text-sm font-medium leading-normal">{category}</p>
        </button>
      ))}
    </div>
  );
}

