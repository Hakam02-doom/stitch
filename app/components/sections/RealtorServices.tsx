import { properties } from "@/constants/data";

export default function RealtorServices() {
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="flex flex-col items-start gap-2 sm:flex-row sm:items-center sm:justify-between">
        <h2 className="text-3xl font-bold leading-tight tracking-[-0.015em]">Realtor Services</h2>
        <a className="flex items-center gap-1 text-sm font-semibold text-primary hover:underline" href="#">
          View All Listings <span className="material-symbols-outlined text-base">arrow_forward</span>
        </a>
      </div>
      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {properties.map((property) => (
          <div key={property.id} className="flex flex-col overflow-hidden rounded-xl border border-black/10 bg-white dark:border-white/10 dark:bg-background-dark/50 transition-shadow hover:shadow-lg dark:hover:shadow-primary/10">
            <div className="relative">
              <div 
                className="aspect-video w-full bg-cover bg-center" 
                style={{ backgroundImage: `url("${property.image}")` }}
              ></div>
              <div className="absolute top-3 right-3 rounded-full bg-black/50 p-1.5 text-white backdrop-blur-sm hover:text-primary">
                <span className="material-symbols-outlined">favorite</span>
              </div>
            </div>
            <div className="flex flex-grow flex-col p-4">
              <p className="text-lg font-bold">{property.price}</p>
              <p className="text-sm text-black/80 dark:text-white/80">{property.address}</p>
              <div className="mt-2 flex-grow text-sm text-black/60 dark:text-white/60">
                <span>{property.beds}</span> · <span>{property.baths}</span> · <span>{property.sqft}</span>
              </div>
              <p className="mt-4 text-xs font-medium text-black/50 dark:text-white/50">Listed by: {property.listedBy}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
