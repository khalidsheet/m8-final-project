import { SectionTitle } from "../Global/SectionTitle";

export const ContactUs = () => {
  return (
    <section id="contact" className="mt-32">
      <SectionTitle title="contact us" />
      <div className="mt-8">
        <div className="grid grid-flow-row grid-cols-2 gap-6">
          <div className="col-span-2 md:col-span-1">
            <div className="flex flex-col">
              <div className="flex flex-row items-center">
                <div className="flex-shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                    />
                  </svg>
                </div>
                <div className="ml-3 text-base text-gray-400">
                  1234 Main St, Anytown, CA 12345
                </div>
              </div>
              <div className="mt-3 flex flex-row items-center">
                <div className="flex-shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                    />
                  </svg>
                </div>
                <div className="ml-3 text-base text-gray-400">
                  (012) 345-6789
                </div>
              </div>
              <div className="mt-3 flex flex-row items-center">
                <div className="flex-shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                    />
                  </svg>
                </div>
                <div className="ml-3 text-base text-gray-400">
                  hello@codestudio.com
                </div>
              </div>
              <div className=" flex flex-row items-center mt-8">
                We look forward to hearing from you and helping you achieve your
                business goals.
              </div>
              <div className="mt-12">
                <h1 className="text-xl font-normal text-white">
                  Code<span className="text-yellow-400 font-bold">Studio</span>
                </h1>
              </div>
            </div>
          </div>
          <div className="col-span-2 md:col-span-1">
            <form className="flex flex-col">
              <div className="flex flex-col">
                <label className="text-sm font-medium text-gray-500">
                  Name
                </label>
                <input
                  type="text"
                  className="mt-1 focus:ring-yellow-500 h-10  block w-full shadow-sm sm:text-sm focus:border-yellow-300 rounded-md bg-[#00000040] px-3"
                  placeholder="Your Name"
                />
              </div>
              <div className="flex flex-col mt-4">
                <label className="text-sm font-medium text-gray-500">
                  Email
                </label>
                <input
                  type="text"
                  className="mt-1 focus:ring-yellow-500 h-10  block w-full shadow-sm sm:text-sm focus:border-yellow-300 rounded-md bg-[#00000040] px-3"
                  placeholder="Your Email"
                />
              </div>
              <div className="flex flex-col mt-4">
                <label className="text-sm font-medium text-gray-500">
                  Message
                </label>
                <textarea
                  placeholder="Your Message"
                  className="mt-1 focus:ring-yellow-500 h-32  block w-full shadow-sm sm:text-sm focus:border-yellow-300 rounded-md bg-[#00000040] p-3"
                ></textarea>
              </div>
              <button className="bg-transparent uppercase border-2 text-white py-2 px-6 text-sm rounded-full hover:bg-white hover:text-black hover:transition-all hover:font-bold mt-8">
                submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
