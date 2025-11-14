export default function Hero() {
  return (
    <section className="container mx-auto px-4 pt-10">
      <div 
        className="relative flex min-h-[360px] flex-col justify-end gap-4 overflow-hidden rounded-xl bg-cover bg-center p-8 text-white" 
        style={{
          backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0) 50%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuAIvx13TRyK74FM2tP4n3nho_AVurUtPN_s5scx3-a9m0hROFjQ5MXbd2xsFu4FkM2FpC0jla8J1x3AemMAaDTzAfK5Ta5gEw_BKGAiWNRZabffnqvfcr88bLnUEGgUYendLfbvkrThSurvVwrZJMK2Nt138FoSZB3MKJkuatVqclYGIUZtmdlvn-313GYUIG89PCvIX8Lpa3e4DVxRXs6oqGsbmShBgbZ8Suwejhzs4IVBSfWOjK9U1h3reIAw2x_DSAa4yRso-Bas")`
        }}
      >
        <h1 className="text-3xl font-bold leading-tight tracking-tight">Welcome Back, Alex!</h1>
        <p className="max-w-xl text-white/90">Featured Announcement: Our new mobile app is here! Download it now to manage your property search on the go.</p>
        <button className="flex w-fit cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-5 bg-primary text-base font-bold leading-normal text-black transition-opacity hover:opacity-90">
          Learn More
        </button>
      </div>
    </section>
  );
}

