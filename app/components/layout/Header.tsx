"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [hoverTimeout, setHoverTimeout] = useState<NodeJS.Timeout | null>(null);
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);
  const [profileHoverTimeout, setProfileHoverTimeout] = useState<NodeJS.Timeout | null>(null);

  const handleMouseEnter = (dropdown: string) => {
    // Clear any pending timeout
    if (hoverTimeout) {
      clearTimeout(hoverTimeout);
      setHoverTimeout(null);
    }
    setActiveDropdown(dropdown);
  };

  const handleMouseLeave = () => {
    // Add a small delay before closing to allow moving to dropdown
    const timeout = setTimeout(() => {
      setActiveDropdown(null);
    }, 150); // 150ms delay
    setHoverTimeout(timeout);
  };

  const handleProfileMouseEnter = () => {
    // Clear any pending timeout
    if (profileHoverTimeout) {
      clearTimeout(profileHoverTimeout);
      setProfileHoverTimeout(null);
    }
    setProfileDropdownOpen(true);
  };

  const handleProfileMouseLeave = () => {
    // Add a small delay before closing to allow moving to dropdown
    const timeout = setTimeout(() => {
      setProfileDropdownOpen(false);
    }, 150); // 150ms delay
    setProfileHoverTimeout(timeout);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-black/10 dark:border-white/10 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-sm">
      <div className="container mx-auto flex items-center justify-between whitespace-nowrap px-4 py-3">
        <Link href="/" className="flex items-center gap-3">
          <div className="size-8 text-primary">
            <svg fill="currentColor" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
              <path d="M13.8261 30.5736C16.7203 29.8826 20.2244 29.4783 24 29.4783C27.7756 29.4783 31.2797 29.8826 34.1739 30.5736C36.9144 31.2278 39.9967 32.7669 41.3563 33.8352L24.8486 7.36089C24.4571 6.73303 23.5429 6.73303 23.1514 7.36089L6.64374 33.8352C8.00331 32.7669 11.0856 31.2278 13.8261 30.5736Z"></path>
              <path clipRule="evenodd" d="M39.998 35.764C39.9944 35.7463 39.9875 35.7155 39.9748 35.6706C39.9436 35.5601 39.8949 35.4259 39.8346 35.2825C39.8168 35.2403 39.7989 35.1993 39.7813 35.1602C38.5103 34.2887 35.9788 33.0607 33.7095 32.5189C30.9875 31.8691 27.6413 31.4783 24 31.4783C20.3587 31.4783 17.0125 31.8691 14.2905 32.5189C12.0012 33.0654 9.44505 34.3104 8.18538 35.1832C8.17384 35.2075 8.16216 35.233 8.15052 35.2592C8.09919 35.3751 8.05721 35.4886 8.02977 35.589C8.00356 35.6848 8.00039 35.7333 8.00004 35.7388C8.00004 35.739 8 35.7393 8.00004 35.7388C8.00004 35.7641 8.0104 36.0767 8.68485 36.6314C9.34546 37.1746 10.4222 37.7531 11.9291 38.2772C14.9242 39.319 19.1919 40 24 40C28.8081 40 33.0758 39.319 36.0709 38.2772C37.5778 37.7531 38.6545 37.1746 39.3151 36.6314C39.9006 36.1499 39.9857 35.8511 39.998 35.764ZM4.95178 32.7688L21.4543 6.30267C22.6288 4.4191 25.3712 4.41909 26.5457 6.30267L43.0534 32.777C43.0709 32.8052 43.0878 32.8338 43.104 32.8629L41.3563 33.8352C43.104 32.8629 43.1038 32.8626 43.104 32.8629L43.1051 32.865L43.1065 32.8675L43.1101 32.8739L43.1199 32.8918C43.1276 32.906 43.1377 32.9246 43.1497 32.9473C43.1738 32.9925 43.2062 33.0545 43.244 33.1299C43.319 33.2792 43.4196 33.489 43.5217 33.7317C43.6901 34.1321 44 34.9311 44 35.7391C44 37.4427 43.003 38.7775 41.8558 39.7209C40.6947 40.6757 39.1354 41.4464 37.385 42.0552C33.8654 43.2794 29.133 44 24 44C18.867 44 14.1346 43.2794 10.615 42.0552C8.86463 41.4464 7.30529 40.6757 6.14419 39.7209C4.99695 38.7775 3.99999 37.4427 3.99999 35.7391C3.99999 34.8725 4.29264 34.0922 4.49321 33.6393C4.60375 33.3898 4.71348 33.1804 4.79687 33.0311C4.83898 32.9556 4.87547 32.8935 4.9035 32.8471C4.91754 32.8238 4.92954 32.8043 4.93916 32.7889L4.94662 32.777L4.95178 32.7688ZM35.9868 29.004L24 9.77997L12.0131 29.004C12.4661 28.8609 12.9179 28.7342 13.3617 28.6282C16.4281 27.8961 20.0901 27.4783 24 27.4783C27.9099 27.4783 31.5719 27.8961 34.6383 28.6282C35.082 28.7342 35.5339 28.8609 35.9868 29.004Z" fillRule="evenodd"></path>
            </svg>
          </div>
          <h2 className="text-xl font-bold leading-tight tracking-[-0.015em] text-black dark:text-white">Propertunity</h2>
        </Link>
        <nav className="hidden items-center gap-9 md:flex">
          <Link className="text-sm font-medium text-primary" href="/">Dashboard</Link>
          
          {/* Services Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter("services")}
            onMouseLeave={handleMouseLeave}
          >
            <button className="text-sm font-medium text-black/80 hover:text-primary dark:text-white/80 dark:hover:text-primary flex items-center gap-1">
              Services
              <span className="material-symbols-outlined text-base">expand_more</span>
            </button>
            {activeDropdown === "services" && (
              <div 
                className="absolute top-full left-0 mt-1 w-56 rounded-lg bg-white dark:bg-background-dark shadow-lg ring-1 ring-black/5 dark:ring-white/10 py-2"
                onMouseEnter={() => handleMouseEnter("services")}
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  href="#"
                  className="block px-4 py-2 text-sm text-black/80 hover:bg-black/5 dark:text-white/80 dark:hover:bg-white/10"
                >
                  Realtor Services
                </Link>
                <Link
                  href="#"
                  className="block px-4 py-2 text-sm text-black/80 hover:bg-black/5 dark:text-white/80 dark:hover:bg-white/10"
                >
                  Professional Services
                </Link>
                <Link
                  href="/marketplace"
                  className="block px-4 py-2 text-sm text-black/80 hover:bg-black/5 dark:text-white/80 dark:hover:bg-white/10"
                >
                  Marketplace
                </Link>
                <div className="my-1 h-px bg-black/10 dark:bg-white/10"></div>
                <Link
                  href="#"
                  className="block px-4 py-2 text-sm text-black/80 hover:bg-black/5 dark:text-white/80 dark:hover:bg-white/10"
                >
                  All Services
                </Link>
              </div>
            )}
          </div>

          {/* Stories Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter("stories")}
            onMouseLeave={handleMouseLeave}
          >
            <button className="text-sm font-medium text-black/80 hover:text-primary dark:text-white/80 dark:hover:text-primary flex items-center gap-1">
              Stories
              <span className="material-symbols-outlined text-base">expand_more</span>
            </button>
            {activeDropdown === "stories" && (
              <div 
                className="absolute top-full left-0 mt-1 w-56 rounded-lg bg-white dark:bg-background-dark shadow-lg ring-1 ring-black/5 dark:ring-white/10 py-2"
                onMouseEnter={() => handleMouseEnter("stories")}
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  href="/stories"
                  className="block px-4 py-2 text-sm text-black/80 hover:bg-black/5 dark:text-white/80 dark:hover:bg-white/10"
                >
                  Recent Stories
                </Link>
                <Link
                  href="#"
                  className="block px-4 py-2 text-sm text-black/80 hover:bg-black/5 dark:text-white/80 dark:hover:bg-white/10"
                >
                  Success Stories
                </Link>
                <Link
                  href="#"
                  className="block px-4 py-2 text-sm text-black/80 hover:bg-black/5 dark:text-white/80 dark:hover:bg-white/10"
                >
                  Home Buying Tips
                </Link>
                <Link
                  href="#"
                  className="block px-4 py-2 text-sm text-black/80 hover:bg-black/5 dark:text-white/80 dark:hover:bg-white/10"
                >
                  Renovation Stories
                </Link>
              </div>
            )}
          </div>

          {/* About Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter("about")}
            onMouseLeave={handleMouseLeave}
          >
            <button className="text-sm font-medium text-black/80 hover:text-primary dark:text-white/80 dark:hover:text-primary flex items-center gap-1">
              About
              <span className="material-symbols-outlined text-base">expand_more</span>
            </button>
            {activeDropdown === "about" && (
              <div 
                className="absolute top-full left-0 mt-1 w-56 rounded-lg bg-white dark:bg-background-dark shadow-lg ring-1 ring-black/5 dark:ring-white/10 py-2"
                onMouseEnter={() => handleMouseEnter("about")}
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  href="#"
                  className="block px-4 py-2 text-sm text-black/80 hover:bg-black/5 dark:text-white/80 dark:hover:bg-white/10"
                >
                  About Us
                </Link>
                <Link
                  href="#"
                  className="block px-4 py-2 text-sm text-black/80 hover:bg-black/5 dark:text-white/80 dark:hover:bg-white/10"
                >
                  Our Team
                </Link>
                <Link
                  href="#"
                  className="block px-4 py-2 text-sm text-black/80 hover:bg-black/5 dark:text-white/80 dark:hover:bg-white/10"
                >
                  Careers
                </Link>
                <Link
                  href="#"
                  className="block px-4 py-2 text-sm text-black/80 hover:bg-black/5 dark:text-white/80 dark:hover:bg-white/10"
                >
                  Press
                </Link>
                <div className="my-1 h-px bg-black/10 dark:bg-white/10"></div>
                <Link
                  href="#"
                  className="block px-4 py-2 text-sm text-black/80 hover:bg-black/5 dark:text-white/80 dark:hover:bg-white/10"
                >
                  Contact Us
                </Link>
              </div>
            )}
          </div>
        </nav>
        <div className="flex items-center gap-4">
          <button className="relative rounded-full p-2 text-black/80 hover:bg-black/5 dark:text-white/80 dark:hover:bg-white/10">
            <span className="material-symbols-outlined">notifications</span>
          </button>
          <div 
            className="relative"
            onMouseEnter={handleProfileMouseEnter}
            onMouseLeave={handleProfileMouseLeave}
          >
            <button className="flex items-center gap-2">
              <img alt="User profile picture" className="h-10 w-10 rounded-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBPniXKFgybOqKM-gIwNhV97dz3Bg838qzEadh5vNGpbBJB5wUEJTQIhA-Nw_NmlipJNZvES7priOKve97vAYdxZJd34nWr2w0LqXDIKDpTLBVVeCBq0xUgTxDYpGkN_jxXCl-fm1kgvlAOuQI2jMxZXLCitVk_bKnZBpp7cTHxFPTpGaWGrJ-uyk3KLmWo-MG9xtaZ9OLyLlhTflufvJWtBflCaA42fRVTbZSzay6oZeibexf28phGZ17YyEmF9-imH14wMyTVC_2I"/>
              <span className="material-symbols-outlined text-black/60 dark:text-white/60">expand_more</span>
            </button>
            {profileDropdownOpen && (
              <div 
                className="absolute right-0 mt-1 w-48 origin-top-right rounded-lg bg-white dark:bg-background-dark shadow-lg ring-1 ring-black/5 dark:ring-white/10 py-1"
                onMouseEnter={handleProfileMouseEnter}
                onMouseLeave={handleProfileMouseLeave}
              >
                <Link
                  href="/profile"
                  className="block px-4 py-2 text-sm text-black/80 hover:bg-black/5 dark:text-white/80 dark:hover:bg-white/10"
                >
                  My Profile
                </Link>
                <a className="block px-4 py-2 text-sm text-black/80 hover:bg-black/5 dark:text-white/80 dark:hover:bg-white/10" href="#">Saved Items</a>
                <a className="block px-4 py-2 text-sm text-black/80 hover:bg-black/5 dark:text-white/80 dark:hover:bg-white/10" href="#">Settings</a>
                <div className="my-1 h-px bg-black/10 dark:bg-white/10"></div>
                <a className="block px-4 py-2 text-sm text-red-500 hover:bg-red-500/10" href="#">Logout</a>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
