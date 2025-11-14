import { stories } from "@/constants/data";

export default function Stories() {
  return (
    <section className="bg-gray-50 dark:bg-background-dark/50 py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-start gap-2 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="text-3xl font-bold leading-tight tracking-[-0.015em]">Recent Stories</h2>
          <a className="flex items-center gap-1 text-sm font-semibold text-primary hover:underline" href="#">
            Read More Stories <span className="material-symbols-outlined text-base">arrow_forward</span>
          </a>
        </div>
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {stories.map((story) => (
            <div key={story.id} className="flex flex-col overflow-hidden rounded-xl border border-black/10 bg-white dark:border-white/10 dark:bg-background-dark transition-shadow hover:shadow-lg dark:hover:shadow-primary/10">
              <div 
                className="h-48 w-full bg-cover bg-center" 
                style={{ backgroundImage: `url("${story.image}")` }}
              ></div>
              <div className="flex flex-grow flex-col p-6">
                <h3 className="text-lg font-bold">{story.title}</h3>
                <p className="mt-2 flex-grow text-sm text-black/60 dark:text-white/60">{story.description}</p>
                <p className="mt-4 text-xs font-medium text-black/50 dark:text-white/50">{story.author}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
