import Image from "next/image";
import Link from "next/link";

export const Hero = () => {
  return (
    <section className="mt-16">
      <div className="my-4 hero-subtitle-animation">
        <p className="text-sm text-center md:text-left  text-yellow-400 uppercase font-bold">
          a world-class digital agency
        </p>
      </div>
      <div className=" text-white hero-title-animation">
        <div className="relative text-center md:text-left  h-28 ">
          <span className="text-5xl sm:text-7xl  md:text-7xl lg:text-7xl 2xl:text-7xl">
            We make amazing
          </span>
          <Image
            className="lines-svg absolute hidden lg:block"
            src="lines.svg"
            alt="lines"
            loading="eager"
            width={100}
            height={100}
          />
        </div>
        <h1 className="h-28 text-5xl text-center md:text-left sm:text-7xl md:text-7xl">
          digital products for
        </h1>
        <h1 className="h-28 text-5xl text-center md:text-left sm:text-7xl md:text-7xl">
          your business
        </h1>
      </div>

      <div className="flex justify-center">
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
