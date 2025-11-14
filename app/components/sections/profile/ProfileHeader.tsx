export default function ProfileHeader() {
  return (
    <div className="flex p-6 @container">
      <div className="flex w-full flex-col gap-6 @[520px]:flex-row @[520px]:justify-between @[520px]:items-center">
        <div className="flex gap-4 items-center">
          <div
            className="bg-center bg-no-repeat aspect-square bg-cover rounded-full w-24 h-24"
            style={{
              backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuA7_zzm6f-pBNJGO0ukZuas-uyzon4gFQfDA_aVmdcRrmn2K4ATb6plfrZt206VCe_FwPmHr1BZDLy9f2hXQAQkysRpB1s3ErnsIWlgqC9-LKt03bxV32v7XKoeG-oovFyQ7RbHcvtF8sTLf4XiUGnRZF_j8L3QKYQClnBOOD8ntxQ5v73d62fCegGZqPFaK0ccPmEwgHO1QOEFnKcRtbv7J0SjDkD4-MPpnvzByrnTX2JLVORwzH-s4BWqfkvQcvuuPOpBjVW5hbXp")`,
            }}
          ></div>
          <div className="flex flex-col justify-center">
            <p className="text-gray-900 dark:text-white text-[22px] font-bold leading-tight tracking-[-0.015em]">Alex Doe</p>
            <p className="text-gray-500 dark:text-gray-400 text-base font-normal leading-normal">alex.doe@example.com</p>
          </div>
        </div>
        <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-gray-100 dark:bg-white/10 text-gray-800 dark:text-white text-sm font-bold leading-normal tracking-[0.015em] w-full max-w-[480px] @[480px]:w-auto border border-gray-200 dark:border-gray-700">
          <span className="truncate">Upload new picture</span>
        </button>
      </div>
    </div>
  );
}

