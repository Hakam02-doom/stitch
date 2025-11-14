import Sidebar from "@/app/components/layout/Sidebar";
import ProfileHeader from "@/app/components/sections/profile/ProfileHeader";
import ProfileForm from "@/app/components/sections/profile/ProfileForm";

export default function ProfilePage() {
  return (
    <div className="relative flex min-h-screen w-full bg-background-light dark:bg-background-dark">
      <Sidebar />
      <main className="flex-1 p-8">
        <div className="max-w-4xl mx-auto">
          {/* Page Heading */}
          <header className="flex flex-wrap justify-between gap-3 mb-8">
            <p className="text-gray-900 dark:text-white text-4xl font-black leading-tight tracking-[-0.033em] min-w-72">
              Manage Your Profile
            </p>
          </header>

          {/* Profile Section */}
          <div className="bg-white dark:bg-background-dark/50 rounded-xl shadow-sm border border-gray-200 dark:border-gray-800">
            <ProfileHeader />
            <hr className="border-gray-200 dark:border-gray-800" />
            <ProfileForm />
          </div>
        </div>
      </main>
    </div>
  );
}

