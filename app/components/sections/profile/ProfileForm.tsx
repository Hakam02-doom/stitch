"use client";

import { useState } from "react";

export default function ProfileForm() {
  const [formData, setFormData] = useState({
    firstName: "Alex",
    lastName: "Doe",
    email: "alex.doe@example.com",
    phone: "+1 (555) 123-4567",
    location: "San Francisco, CA",
    currentPassword: "********",
    newPassword: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Personal Information Section */}
      <h2 className="text-gray-900 dark:text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-6 pb-3 pt-5">
        Personal Information
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4 px-6 py-3">
        <label className="flex flex-col">
          <p className="text-gray-800 dark:text-white text-base font-medium leading-normal pb-2">First Name</p>
          <input
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-gray-800 dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-background-dark/60 h-12 placeholder:text-gray-400 dark:placeholder:text-gray-500 p-[15px] text-base font-normal leading-normal"
          />
        </label>
        <label className="flex flex-col">
          <p className="text-gray-800 dark:text-white text-base font-medium leading-normal pb-2">Last Name</p>
          <input
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-gray-800 dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-background-dark/60 h-12 placeholder:text-gray-400 dark:placeholder:text-gray-500 p-[15px] text-base font-normal leading-normal"
          />
        </label>
        <label className="flex flex-col md:col-span-2">
          <p className="text-gray-800 dark:text-white text-base font-medium leading-normal pb-2">Email Address</p>
          <input
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-gray-800 dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-background-dark/60 h-12 placeholder:text-gray-400 dark:placeholder:text-gray-500 p-[15px] text-base font-normal leading-normal"
          />
        </label>
        <label className="flex flex-col">
          <p className="text-gray-800 dark:text-white text-base font-medium leading-normal pb-2">Phone Number</p>
          <input
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-gray-800 dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-background-dark/60 h-12 placeholder:text-gray-400 dark:placeholder:text-gray-500 p-[15px] text-base font-normal leading-normal"
          />
        </label>
        <label className="flex flex-col">
          <p className="text-gray-800 dark:text-white text-base font-medium leading-normal pb-2">Location</p>
          <input
            name="location"
            value={formData.location}
            onChange={handleChange}
            className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-gray-800 dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-background-dark/60 h-12 placeholder:text-gray-400 dark:placeholder:text-gray-500 p-[15px] text-base font-normal leading-normal"
          />
        </label>
      </div>

      {/* Account Security Section */}
      <hr className="border-gray-200 dark:border-gray-800 mt-6" />
      <h2 className="text-gray-900 dark:text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-6 pb-3 pt-5">
        Account Security
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4 px-6 py-3">
        <label className="flex flex-col">
          <p className="text-gray-800 dark:text-white text-base font-medium leading-normal pb-2">Current Password</p>
          <input
            name="currentPassword"
            type="password"
            value={formData.currentPassword}
            onChange={handleChange}
            className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-gray-800 dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-background-dark/60 h-12 placeholder:text-gray-400 dark:placeholder:text-gray-500 p-[15px] text-base font-normal leading-normal"
          />
        </label>
        <label className="flex flex-col">
          <p className="text-gray-800 dark:text-white text-base font-medium leading-normal pb-2">New Password</p>
          <input
            name="newPassword"
            type="password"
            value={formData.newPassword}
            onChange={handleChange}
            placeholder="Enter new password"
            className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-gray-800 dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-background-dark/60 h-12 placeholder:text-gray-400 dark:placeholder:text-gray-500 p-[15px] text-base font-normal leading-normal"
          />
        </label>
      </div>

      {/* Form Actions */}
      <div className="flex justify-end p-6 mt-4">
        <button
          type="submit"
          className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-primary text-white text-base font-bold leading-normal tracking-[0.015em] hover:opacity-90 transition-opacity"
        >
          <span className="truncate">Save Changes</span>
        </button>
      </div>
    </form>
  );
}

