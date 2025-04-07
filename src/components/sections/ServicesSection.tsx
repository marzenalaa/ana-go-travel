import { Heading, ServicesCard } from "../ui";
import { servicesSection } from "@/data/siteData";

const ServicesSection = () => {
  const { title, subtitle, description, services } = servicesSection;
  return (
    <section
      className="bg-gray-50 min-h-screen py-20"
      id="services"
      role="region"
    >
      <div className="container">
        <Heading
          title={title}
          subtitle={subtitle}
          description={description}
          className="text-center"
        />
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
          {services.map((service, index) => (
            <ServicesCard key={index} {...service} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ServicesSection;
