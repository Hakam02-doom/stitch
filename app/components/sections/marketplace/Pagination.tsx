export default function Pagination() {
  return (
    <div className="flex items-center justify-center pt-8">
      <nav className="flex items-center gap-2">
        <a className="flex items-center justify-center size-10 rounded-lg text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-[#27353a] transition-colors" href="#">
          <span className="material-symbols-outlined">chevron_left</span>
        </a>
        <a className="flex items-center justify-center size-10 rounded-lg text-sm font-medium bg-primary text-white dark:text-[#101618]" href="#">1</a>
        <a className="flex items-center justify-center size-10 rounded-lg text-sm font-medium text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-[#27353a] transition-colors" href="#">2</a>
        <a className="flex items-center justify-center size-10 rounded-lg text-sm font-medium text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-[#27353a] transition-colors" href="#">3</a>
        <span className="text-gray-500 dark:text-gray-400">...</span>
        <a className="flex items-center justify-center size-10 rounded-lg text-sm font-medium text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-[#27353a] transition-colors" href="#">12</a>
        <a className="flex items-center justify-center size-10 rounded-lg text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-[#27353a] transition-colors" href="#">
          <span className="material-symbols-outlined">chevron_right</span>
        </a>
      </nav>
    </div>
  );
}

