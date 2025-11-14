import Header from "@/app/components/layout/Header";
import Footer from "@/app/components/layout/Footer";
import SearchSection from "@/app/components/sections/marketplace/SearchSection";
import CategoryChips from "@/app/components/sections/marketplace/CategoryChips";
import ProfessionalCard from "@/app/components/ui/ProfessionalCard";
import Pagination from "@/app/components/sections/marketplace/Pagination";
import { professionals } from "@/constants/marketplace";

export default function MarketplacePage() {
  return (
    <div className="relative flex min-h-screen w-full flex-col">
      <Header />
      <main className="px-4 sm:px-8 md:px-10 flex flex-1 justify-center py-10">
        <div className="layout-content-container flex flex-col w-full max-w-6xl flex-1 gap-8">
          {/* Page Heading */}
          <div className="flex flex-col gap-3 text-center">
            <h1 className="text-black dark:text-white text-4xl md:text-5xl font-black leading-tight tracking-[-0.033em]">
              Find the Right Professional for Your Needs
            </h1>
            <p className="text-gray-500 dark:text-[#9ab3bc] text-lg font-normal leading-normal max-w-3xl mx-auto">
              Browse our network of trusted experts, from home inspectors to legal advisors, and find the perfect match for your project.
            </p>
          </div>

          {/* Search Section */}
          <SearchSection />

          {/* Category Chips */}
          <CategoryChips />

          {/* Professional Profile Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {professionals.map((professional) => (
              <ProfessionalCard key={professional.id} professional={professional} />
            ))}
          </div>

          {/* Pagination */}
          <Pagination />
        </div>
      </main>
      <Footer />
    </div>
  );
}

