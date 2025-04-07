"use client";

import Image from "next/image";
import { aboutSection } from "../../data/siteData";
import { Button, Heading, FeaturesCard, FeaturesWhyCard } from "../ui";

const AboutSection = () => {
  const { title, subtitle, description, image, features, buttonTitle, whyUs } =
    aboutSection;
  const { titleWhy, featuresWhy } = whyUs;
  return (
    <section className="py-6 sm:py-16 mt-12" id="about">
      <div className="container flex flex-col md:flex-row items-center justify-between flex-wrap gap-4 mb-12">
        {features.map((feature, index) => (
          <FeaturesCard key={index} {...feature} />
        ))}
      </div>
      <div className="border-t border-gray-200 my-6"></div>
      <div className="container flex flex-col-reverse lg:flex-row justify-evenly gap-4 my-12">
        <div className="flex justify-center items-center w-full lg:w-1/2 mt-10 lg:mt-0">
          <Image
            src={image}
            alt="About"
            width={350}
            height={350}
            className="rounded-lg p-2 bg-primary/25"
          />
        </div>
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <Heading title={title} subtitle={subtitle} />
          <p className="text-gray-900 my-6">{description}</p>
          <div>
            <h3 className="my-4 font-semibold text-primary">{titleWhy}</h3>
            {featuresWhy.map((feature, index) => (
              <FeaturesWhyCard key={index} {...feature} />
            ))}
          </div>
          <Button text={buttonTitle} href={`/about`} />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
