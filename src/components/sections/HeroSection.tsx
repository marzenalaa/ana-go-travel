"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { heroSection } from "../../data/siteData";
import { Button } from "../ui";

const HeroSection = () => {
  const { title, subtitle, description, href, textButton, desert, mecca } =
    heroSection;
  return (
    <header
      className="relative max-h-full bg-cover bg-center overflow-hidden pt-24 md:pt-0"
      role="img"
      id="header"
    >
      <div className="absolute inset-0 -z-10">
        <Image
          src="/assets/images/background.png"
          alt="Background"
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="container flex flex-col items-center justify-center h-full sm:h-screen"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div>
            <p className="text-primary text-lg max-w-2xl opacity-60 mb-2">
              {subtitle}
            </p>
            <h1 className="text-black text-4xl sm:text-5xl md:text-[64px] max-w-3xl font-semibold mb-8">
              Welcome to{" "}
              <span className="relative inline-block after:content-[''] after:block after:h-[10px] after:bg-primary after:w-full">
                {title}
              </span>
            </h1>
            <p className="text-black text-lg max-w-2xl">{description}</p>
            <Button text={textButton} href={href} className="w-full md:w-52" />
          </div>
          <div className="relative">
            <Image
              src={mecca}
              alt="Mecca view"
              width={260}
              className="block mx-auto lg:absolute lg:top-2"
            />
            <Image
              src={desert}
              alt="Desert landscape"
              width={260}
              className="absolute top-12 right-0 hidden sm:block"
            />
          </div>
        </div>
      </motion.div>
    </header>
  );
};

export default HeroSection;
