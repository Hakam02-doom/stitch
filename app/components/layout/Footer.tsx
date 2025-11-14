export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-black/20">
      <div className="container mx-auto grid grid-cols-2 gap-8 px-4 py-16 md:grid-cols-4">
        <div className="flex flex-col gap-4">
          <h3 className="font-bold text-black dark:text-white">Company</h3>
          <a className="text-sm text-black/60 hover:text-primary dark:text-white/60 dark:hover:text-primary" href="#">About Us</a>
          <a className="text-sm text-black/60 hover:text-primary dark:text-white/60 dark:hover:text-primary" href="#">Careers</a>
          <a className="text-sm text-black/60 hover:text-primary dark:text-white/60 dark:hover:text-primary" href="#">Press</a>
        </div>
        <div className="flex flex-col gap-4">
          <h3 className="font-bold text-black dark:text-white">Services</h3>
          <a className="text-sm text-black/60 hover:text-primary dark:text-white/60 dark:hover:text-primary" href="#">Realtor Services</a>
          <a className="text-sm text-black/60 hover:text-primary dark:text-white/60 dark:hover:text-primary" href="#">Professional Services</a>
          <a className="text-sm text-black/60 hover:text-primary dark:text-white/60 dark:hover:text-primary" href="#">Stories</a>
        </div>
        <div className="flex flex-col gap-4">
          <h3 className="font-bold text-black dark:text-white">Support</h3>
          <a className="text-sm text-black/60 hover:text-primary dark:text-white/60 dark:hover:text-primary" href="#">Contact Us</a>
          <a className="text-sm text-black/60 hover:text-primary dark:text-white/60 dark:hover:text-primary" href="#">FAQ</a>
          <a className="text-sm text-black/60 hover:text-primary dark:text-white/60 dark:hover:text-primary" href="#">Help Center</a>
        </div>
        <div className="flex flex-col gap-4">
          <h3 className="font-bold text-black dark:text-white">Legal</h3>
          <a className="text-sm text-black/60 hover:text-primary dark:text-white/60 dark:hover:text-primary" href="#">Terms of Service</a>
          <a className="text-sm text-black/60 hover:text-primary dark:text-white/60 dark:hover:text-primary" href="#">Privacy Policy</a>
        </div>
      </div>
      <div className="border-t border-black/10 dark:border-white/10">
        <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 py-6 md:flex-row">
          <p className="text-sm text-black/60 dark:text-white/60">© 2024 Propertunity. All rights reserved.</p>
          <div className="flex gap-4">
            <a className="text-black/60 hover:text-primary dark:text-white/60 dark:hover:text-primary" href="#">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.46,6C21.69,6.35 20.86,6.58 20,6.69C20.88,6.16 21.56,5.32 21.88,4.31C21.05,4.81 20.13,5.16 19.16,5.36C18.37,4.5 17.26,4 16,4C13.65,4 11.73,5.92 11.73,8.29C11.73,8.63 11.77,8.96 11.84,9.27C8.28,9.09 5.11,7.38 3,4.79C2.63,5.42 2.42,6.16 2.42,6.94C2.42,8.43 3.17,9.75 4.33,10.5C3.62,10.5 2.96,10.3 2.38,10C2.38,10 2.38,10 2.38,10.03C2.38,12.11 3.86,13.85 5.82,14.24C5.46,14.34 5.08,14.39 4.69,14.39C4.42,14.39 4.15,14.36 3.89,14.31C4.43,16 6,17.26 7.89,17.29C6.43,18.45 4.58,19.13 2.56,19.13C2.22,19.13 1.88,19.11 1.54,19.07C3.44,20.29 5.7,21 8.12,21C16,21 20.33,14.46 20.33,8.79C20.33,8.6 20.33,8.42 20.32,8.23C21.16,7.63 21.88,6.87 22.46,6Z"></path>
              </svg>
            </a>
            <a className="text-black/60 hover:text-primary dark:text-white/60 dark:hover:text-primary" href="#">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19,3H5C3.89,3 3,3.89 3,5V19C3,20.1 3.9,21 5,21H19C20.1,21 21,20.1 21,19V5C21,3.89 20.1,3 19,3M12,5C15.31,5 18,7.69 18,11C18,14.31 15.31,17 12,17C8.69,17 6,14.31 6,11C6,7.69 8.69,5 12,5M12,7A4,4 0 0,0 8,11A4,4 0 0,0 12,15A4,4 0 0,0 16,11A4,4 0 0,0 12,7Z"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

