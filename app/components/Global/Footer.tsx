export const Footer = () => {
  return (
    <footer className="border-t border-t-gray-800 mt-12  w-full bg-[#00000040]">
      <div className="max-w-7xl mx-auto py-6 px-6 sm:px-6 lg:px-8">
        <div className="flex-grow flex justify-between items-center">
          <div className="text-gray-400">
            <p className="text-sm">© 2023 CodeStudio. All rights reserved</p>
          </div>
          <div className="flex items-center space-x-4">
            <a
              href="#"
              className="text-gray-400 hover:text-gray-300 transition-colors duration-200 rotate-180"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="#9CA3AF"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
