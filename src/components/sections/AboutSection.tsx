"use client";

import Image from "next/image";
import { aboutSection } from "../../data/siteData";
import Heading from "../ui/Heading";
import { BadgeCheck } from "lucide-react";

const AboutSection = () => {
  const { title, subtitle, description, image, features, buttonTitle, whyUs } =
    aboutSection;
  const { titleWhy, featuresWhy } = whyUs;
  return (
    <section className="py-16" id="about">
      <div className="container flex flex-col md:flex-row items-center justify-between flex-wrap gap-4 mb-12">
        {features.map((feature, index) => (
          <div className="flex gap-6 mx-auto w-full md:w-auto" key={index}>
            <div className="flex items-center justify-center">
              {feature.icon}
            </div>
            <div>
              <h3 className="mb-1 text-lg font-medium">{feature.title}</h3>
              <p className="text-gray-700">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="border-t-[1px]"></div>
      <div className="container flex justify-evenly my-12">
        <div className="flex justify-center items-center w-1/2">
          <Image
            src={image}
            alt="About"
            width={350}
            height={350}
            className="rounded-lg p-2 bg-primary/25"
          />
        </div>
        <div className="w-1/2">
          <Heading title={title} subtitle={subtitle} className={`text-left`} />
          <p className="text-gray-900 my-6">{description}</p>
          <div>
            <h4 className="my-4 font-medium text-primary">{titleWhy}</h4>
            {featuresWhy.map((feature, index) => (
              <div key={index} className="flex items-center my-2 gap-1">
                <BadgeCheck size={15} className="text-primary mr-1" />
                <h5 className="font-medium">{`${feature.title} : `}</h5>
                <p className="text-gray-900 text-sm">
                  {" "}
                  {` ${feature.description}.`}
                </p>
              </div>
            ))}
          </div>
          <button className="mt-8 px-5 py-2 bg-white text-primary rounded-full border-2 border-primary hover:bg-primary hover:text-white transition-all duration-300 ease-in-out">
            <a href={``}>{buttonTitle}</a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
