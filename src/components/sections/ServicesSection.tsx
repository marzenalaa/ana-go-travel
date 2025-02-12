import Heading from "../ui/Heading";
import { servicesSection } from "@/data/siteData";

const ServicesSection = () => {
  const { title, subtitle, description, services } = servicesSection;
  return (
    <section className="bg-gray-50 h-full py-20" id="services">
      <div className="container">
        <Heading title={title} subtitle={subtitle} className="text-center" />
        <p className="text-center w-2/3 text-gray-900 mx-auto my-4">
          {description}
        </p>
        <div className="grid grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center cursor-pointer mx-auto my-8 bg-white py-8 p-4 rounded-3xl border border-gray-300 shadow-lg transition duration-500 ease-in-out transform hover:-translate-y-1 hover:shadow-2xl"
            >
              <span className="rounded-full p-3 text-white bg-primary flex items-center justify-center">
                {service.icon}
              </span>
              <h3 className="text-xl font-bold mt-4">{service.titleService}</h3>
              <p className="text-center text-gray-800 mt-2">
                {service.descriptionService}.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
