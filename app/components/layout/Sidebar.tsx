"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const pathname = usePathname();

  const navItems = [
    { id: "profile", href: "/profile", label: "Profile", icon: "person" },
    { id: "listings", href: "#", label: "My Listings", icon: "villa" },
    { id: "services", href: "#", label: "My Services", icon: "work" },
    { id: "stories", href: "#", label: "My Stories", icon: "auto_stories" },
  ];

  const bottomItems = [
    { id: "settings", href: "#", label: "Settings", icon: "settings" },
    { id: "logout", href: "#", label: "Log Out", icon: "logout" },
  ];

  return (
    <aside className="flex h-screen w-64 flex-col bg-white p-4 dark:bg-background-dark dark:border-r dark:border-gray-800 sticky top-0">
      <div className="flex-shrink-0 mb-8">
        <h1 className="text-2xl font-black leading-tight tracking-[-0.033em] text-gray-900 dark:text-white">Realtor.io</h1>
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex gap-3 items-center">
          <div
            className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
            style={{
              backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuD7x8CQJVpGIHV6jQaPkcxXBA6uKyYq5Uo0oRsHKkQDgZT36Z7wUYeQMzu7t2CiIBkh5tUkfYOxZmP04mA8MGR1x0F9vclkTvvqzS9okOGY-F6AZD3t-E_JCZiCVpD8unLycxf_D_l7CXU3Pz5IIJn4bKLDw7hqnO43uUi6iNwVmWX8Sfw4DT8pw-WHtRcz4UA8x7mceDsXEHPTrt0Bc9iXBwgPJKkauOnpt8_eFzzRKIU-6LaYTZ3hyOKEdDUOLooxh0PknTp-kNkX")`,
            }}
          ></div>
          <div className="flex flex-col">
            <h1 className="text-gray-900 dark:text-white text-base font-medium leading-normal">Alex Doe</h1>
            <p className="text-gray-500 dark:text-gray-400 text-sm font-normal leading-normal">alex.doe@example.com</p>
          </div>
        </div>
        <nav className="flex flex-col gap-2 mt-4">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.id}
                href={item.href}
                className={`flex items-center gap-3 px-3 py-2 rounded-lg ${
                  isActive
                    ? "bg-primary/20 text-primary"
                    : "text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-white/10"
                }`}
              >
                <span className="material-symbols-outlined">{item.icon}</span>
                <p className="text-sm font-medium leading-normal">{item.label}</p>
              </Link>
            );
          })}
        </nav>
      </div>
      <div className="mt-auto flex flex-col gap-1">
        {bottomItems.map((item) => (
          <Link
            key={item.id}
            href={item.href}
            className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-white/10"
          >
            <span className="material-symbols-outlined">{item.icon}</span>
            <p className="text-sm font-medium leading-normal">{item.label}</p>
          </Link>
        ))}
      </div>
    </aside>
  );
}
