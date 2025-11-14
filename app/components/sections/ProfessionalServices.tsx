import { services } from "@/constants/data";
import Stars from "@/app/components/ui/Stars";

export default function ProfessionalServices() {
  return (
    <section className="container mx-auto px-4 pb-16">
      <div className="flex flex-col items-start gap-2 sm:flex-row sm:items-center sm:justify-between">
        <h2 className="text-3xl font-bold leading-tight tracking-[-0.015em]">Professional Services</h2>
        <a className="flex items-center gap-1 text-sm font-semibold text-primary hover:underline" href="#">
          Find a Pro <span className="material-symbols-outlined text-base">arrow_forward</span>
        </a>
      </div>
      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((service) => (
          <div key={service.id} className="flex flex-col items-center gap-4 rounded-xl border border-black/10 bg-white p-6 text-center dark:border-white/10 dark:bg-background-dark/50 transition-shadow hover:shadow-lg dark:hover:shadow-primary/10">
            {service.hasImage ? (
              <img alt={service.name} className="h-20 w-20 rounded-full object-cover ring-2 ring-primary/50" src={service.image} />
            ) : (
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/20 object-cover ring-2 ring-primary/50 text-primary">
                <span className="material-symbols-outlined !text-4xl">{service.icon}</span>
              </div>
            )}
            <div className="flex flex-col">
              <h3 className="font-bold">{service.name}</h3>
              <p className="text-sm text-black/60 dark:text-white/60">{service.category}</p>
              <div className="mt-1 flex justify-center">
                <Stars rating={service.rating} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
