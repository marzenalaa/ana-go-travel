import Heading from "../ui/Heading";
import { visaSection } from "@/data/siteData";
import { VisaCard } from "../ui";

const VisaSection = () => {
  const { title, subtitle, tagline, description, visas } = visaSection;
  return (
    <section className="bg-gray-50 h-full py-20" id="visa">
      <div className="container">
        <Heading
          title={title}
          subtitle={subtitle}
          description={description}
          className="text-center"
        />
        <ul
          className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 mt-12"
          role="list"
        >
          {visas.map((element, index) => (
            <VisaCard key={index} {...element} />
          ))}
        </ul>
        <p className="mt-16 text-center text-2xl font-semibold text-primary">
          {tagline}
        </p>
      </div>
    </section>
  );
};

export default VisaSection;
