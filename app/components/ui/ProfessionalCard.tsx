import { Professional } from "@/types";
import Stars from "./Stars";

interface ProfessionalCardProps {
  professional: Professional;
}

export default function ProfessionalCard({ professional }: ProfessionalCardProps) {
  return (
    <div className="flex flex-col rounded-xl border border-gray-200 dark:border-[#27353a] bg-white dark:bg-[#1b2428] overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
      <div className="p-6 flex flex-col items-center text-center">
        <img
          className="rounded-full size-24 mb-4 object-cover"
          alt={`Profile picture of ${professional.name}`}
          src={professional.image}
        />
        <h3 className="text-lg font-bold text-black dark:text-white">{professional.name}</h3>
        <p className="text-sm text-gray-500 dark:text-[#9ab3bc]">{professional.title}</p>
        <div className="flex items-center gap-1 mt-2">
          <Stars rating={professional.rating} className="text-yellow-400" starClassName="text-yellow-400" />
          <p className="text-xs text-gray-500 dark:text-[#9ab3bc] ml-1">({professional.reviews} reviews)</p>
        </div>
        <div className="flex items-center gap-2 mt-4 text-xs text-gray-600 dark:text-gray-300">
          <span className="material-symbols-outlined !text-base">{professional.specialtyIcon}</span>
          <span>{professional.specialty}</span>
        </div>
        <div className="flex items-center gap-2 mt-1 text-xs text-gray-500 dark:text-gray-400">
          <span className="material-symbols-outlined !text-base">location_on</span>
          <span>{professional.location}</span>
        </div>
      </div>
      <div className="p-4 border-t border-gray-200 dark:border-[#27353a] bg-gray-50 dark:bg-[#27353a]/30">
        <button className="flex w-full min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-white dark:text-[#101618] text-sm font-bold leading-normal tracking-[0.015em] hover:opacity-90 transition-opacity">
          <span className="truncate">View Profile</span>
        </button>
      </div>
    </div>
  );
}
