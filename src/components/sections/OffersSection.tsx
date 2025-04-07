import { offersSection } from "@/data/siteData";
import { Heading } from "../ui";
const OffersSection = () => {
  const { title, subtitle, description } = offersSection;

  return (
    <section className="container h-full my-20" id="offers">
      <Heading
        title={title}
        subtitle={subtitle}
        description={description}
        className="text-center"
      />
    </section>
  );
};

export default OffersSection;
