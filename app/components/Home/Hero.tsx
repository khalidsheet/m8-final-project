import Link from "next/link";

export const Hero = () => {
  return (
    <section className="mt-16">
      <div className="my-4 hero-subtitle-animation">
        <p className="text-sm font-normal text-yellow-400 uppercase">
          a world-class digital agency
        </p>
      </div>
      <div className="text-8xl font-medium bg-clip-text text-white hero-title-animation">
        <div className="relative h-28">
          We make amazing
          <img className="lines-svg absolute right-0 top-0" src="lines.svg" />
        </div>
        <h1 className="h-28">digital products for</h1>
        <h1 className="h-28">your business</h1>
      </div>

      <div className="">
        <a
          href="#contact"
          className="mt-8 bg-gradient-to-r from-yellow-300 to-yellow-500 text-gray-800 font-bold py-4 px-8 rounded-full flex space-x-3 hover:space-x-6 w-max hover:shadow-lg hover:transition-all hover:duration-300 hover:ease-in-out"
        >
          <span className="text-gray-800">Contact Us</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="#1F2937"
            className="w-6 h-6 text-yellow-500 transition-all"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
            />
          </svg>
        </a>
      </div>
    </section>
  );
};
