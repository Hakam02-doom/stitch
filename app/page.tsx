import Header from "@/app/components/layout/Header";
import Footer from "@/app/components/layout/Footer";
import Hero from "@/app/components/sections/Hero";
import RealtorServices from "@/app/components/sections/RealtorServices";
import ProfessionalServices from "@/app/components/sections/ProfessionalServices";
import Stories from "@/app/components/sections/Stories";

export default function Home() {
  return (
    <div className="relative flex min-h-screen w-full flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <RealtorServices />
        <ProfessionalServices />
        <Stories />
      </main>
      <Footer />
    </div>
  );
}
