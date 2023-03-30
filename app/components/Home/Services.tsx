import { SectionTitle } from "../Global/SectionTitle";

export const Services = () => {
  return (
    <section id="services" className="pt-32">
      <SectionTitle title="our services" />
      <div className="max-w-7xl mx-auto  bg-[#00000000] mt-8 rounded-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col gap-4 bg-gradient-to-tr from-blue-900 to-blue-500 p-8 rounded-md">
            <h2 className="text-3xl font-bold text-white">Plan</h2>
            <p className=" text-lg text-gray-200">
              A project management tool for organizing workflow and tracking
              progress. Easily create tasks, assign team members, and set
              deadlines. Collaborate with your team and stay on top of
              deadlines.
            </p>
          </div>
          <div className="flex flex-col gap-4 bg-gradient-to-tr from-green-900 to-green-500 p-8 rounded-md">
            <h2 className="text-3xl font-bold text-white">Design</h2>
            <p className=" text-lg text-gray-200">
              A design service for creating custom solutions for branding and
              marketing needs. Experienced designers create tailored designs
              that make a lasting impact. Latest design trends and techniques
              are used to craft stunning visuals that communicate your message.
            </p>
          </div>
          <div className="flex flex-col gap-4 bg-gradient-to-tr from-yellow-900 to-yellow-500 p-8 rounded-md">
            <h2 className="text-3xl font-bold text-white">Develop</h2>
            <p className=" text-lg text-gray-200">
              A software development company for creating custom solutions for
              businesses. Experienced developers work closely with clients to
              create software tailored to their needs. Collaborative and
              transparent development process ensures the final product meets
              clients expectations.
            </p>
          </div>
          <div className="flex flex-col gap-4 bg-gradient-to-tr from-purple-900 to-purple-500 p-8 rounded-md">
            <h2 className="text-3xl font-bold text-white">Deliver</h2>
            <p className=" text-lg text-gray-200">
              A reliable and efficient delivery service that helps businesses
              get their products to customers. Experienced delivery
              professionals use latest technology and industry best practices to
              ensure timely delivery. Flexible delivery options and exceptional
              customer service to exceed expectations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
