import Link from "next/link";

export const Header = () => {
  return (
    <section>
      <div className="fixed top-0 left-0 w-full h-24 blur bg-gray-900 opacity-40 overflow-hidden"></div>
      <header className="fixed w-full">
        <div className="max-w-7xl mx-auto py-6 px-6 sm:px-6 lg:px-8 flex justify-between items-center">
          <h1 className="text-xl font-normal text-white">
            Code<span className="text-yellow-400 font-bold">Studio</span>
          </h1>
          <div className="links flex gap-6 items-center">
            <Link
              href="#"
              className="link-hover text-sm font-normal text-white uppercase"
            >
              Home
            </Link>
            <Link
              href="#"
              className="link-hover text-sm font-normal text-white uppercase"
            >
              About
            </Link>
            <Link
              href="#"
              className="link-hover text-sm font-normal text-white uppercase"
            >
              Services
            </Link>
            <Link
              href="#"
              className="link-hover text-sm font-normal text-white uppercase"
            >
              Projects
            </Link>

            <button className="bg-transparent uppercase border-2 text-white py-2 px-6 text-sm rounded-full hover:bg-white hover:text-black hover:transition-all hover:font-bold">
              contact us
            </button>
          </div>
        </div>
      </header>
    </section>
  );
};
