import Header from "@/app/components/layout/Header";
import Footer from "@/app/components/layout/Footer";
import StoryComposer from "@/app/components/sections/stories/StoryComposer";
import StoryCard from "@/app/components/sections/stories/StoryCard";
import { communityStories } from "@/constants/stories";

export default function StoriesPage() {
  return (
    <div className="relative flex min-h-screen w-full flex-col bg-background-light dark:bg-background-dark">
      <Header />
      <main className="flex h-full w-full grow flex-col items-center">
        <div className="flex w-full max-w-4xl flex-col items-center gap-6 p-4 sm:p-6 lg:p-8">
          {/* Main Content Column */}
          <div className="flex w-full max-w-xl flex-col gap-6">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <p className="text-white text-4xl font-black leading-tight tracking-[-0.033em]">Community Stories</p>
            </div>

            {/* Composer */}
            <StoryComposer />

            {/* Story Cards */}
            {communityStories.map((story) => (
              <StoryCard key={story.id} story={story} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

