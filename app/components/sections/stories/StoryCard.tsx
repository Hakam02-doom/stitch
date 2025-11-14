"use client";

import { CommunityStory } from "@/types";
import { useState } from "react";

interface StoryCardProps {
  story: CommunityStory;
}

export default function StoryCard({ story }: StoryCardProps) {
  const [isLiked, setIsLiked] = useState(story.isLiked || false);
  const [likes, setLikes] = useState(story.likes);

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikes(isLiked ? likes - 1 : likes + 1);
  };

  return (
    <div className="flex w-full flex-col overflow-hidden rounded-xl border border-white/10 bg-[#1E1E1E]">
      <div className="flex flex-col gap-4 p-4">
        <div className="flex items-center gap-3">
          <div
            className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
            style={{ backgroundImage: `url("${story.authorImage}")` }}
          ></div>
          <div className="flex flex-col">
            <p className="text-white text-base font-bold leading-tight">{story.author}</p>
            <p className="text-[#A9A9A9] text-sm font-normal leading-normal">{story.timestamp}</p>
          </div>
        </div>
        <p className="text-white text-base font-normal leading-normal">{story.content}</p>
      </div>
      {story.image && (
        <div
          className="w-full bg-center bg-no-repeat aspect-video bg-cover"
          style={{ backgroundImage: `url("${story.image}")` }}
        ></div>
      )}
      <div className="flex items-center justify-start divide-x divide-white/10 border-t border-white/10">
        <button
          onClick={handleLike}
          className={`flex flex-1 items-center justify-center gap-2 px-3 py-3 transition-colors hover:bg-primary/20 ${
            isLiked ? "text-primary" : "text-[#A9A9A9] hover:text-primary"
          }`}
        >
          <span
            className="material-symbols-outlined"
            style={isLiked ? { fontVariationSettings: "'FILL' 1" } : {}}
          >
            thumb_up
          </span>
          <p className="text-sm font-bold">{likes}</p>
        </button>
        <button className="flex flex-1 items-center justify-center gap-2 px-3 py-3 text-[#A9A9A9] transition-colors hover:bg-primary/20 hover:text-primary">
          <span className="material-symbols-outlined">chat_bubble</span>
          <p className="text-sm font-bold">{story.comments}</p>
        </button>
        <button className="flex flex-1 items-center justify-center gap-2 px-3 py-3 text-[#A9A9A9] transition-colors hover:bg-primary/20 hover:text-primary">
          <span className="material-symbols-outlined">share</span>
          <p className="text-sm font-bold">{story.shares}</p>
        </button>
      </div>
    </div>
  );
}

