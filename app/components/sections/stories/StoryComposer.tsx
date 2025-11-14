"use client";

import { useState } from "react";

export default function StoryComposer() {
  const [content, setContent] = useState("");

  return (
    <div className="flex w-full flex-col gap-3 rounded-xl border border-white/10 bg-[#1E1E1E] p-4">
      <div className="flex items-start gap-3">
        <div
          className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 shrink-0"
          style={{
            backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuCV3wQXRZ86wUrAsl-q9gnsrVbKmTqHzQ_33wKlJuT3qk52bQ_qv82HrAm1VeNv8R-Vp0S3dfBJXZMA0Jrtvp5GdQU11Ie2x7uGQ6Ae-oO68rkLbWkOv4FrGyUdwFJ6ghdJ41JzPwsERScwFdO2gdzct4RTvwN0vSJIVSXA85vSNTjMa-Z6p6FVj9LsqZLRZEwKayBu5ZPY1TfP49TCgirNdVFn__HdNBfpry1DasOo8XL5y3rOv4jstQ7zwnxxlcJn3LSaE6aAqfxT")`,
          }}
        ></div>
        <textarea
          className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden border-0 bg-transparent p-0 text-lg text-white placeholder:text-[#A9A9A9] focus:outline-0 focus:ring-0"
          placeholder="Share your success story..."
          rows={2}
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </div>
      <div className="flex items-center justify-between pl-14">
        <div className="flex items-center gap-2">
          <button className="flex items-center justify-center rounded-full p-2 text-[#A9A9A9] transition-colors hover:bg-primary/20 hover:text-primary">
            <span className="material-symbols-outlined">image</span>
          </button>
          <button className="flex items-center justify-center rounded-full p-2 text-[#A9A9A9] transition-colors hover:bg-primary/20 hover:text-primary">
            <span className="material-symbols-outlined">smart_display</span>
          </button>
        </div>
        <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-9 px-5 bg-primary text-background-dark text-sm font-bold leading-normal transition-opacity hover:opacity-90">
          <span className="truncate">Post</span>
        </button>
      </div>
    </div>
  );
}

