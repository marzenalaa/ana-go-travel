"use client";
import { motion } from "framer-motion";
import { heroSection } from "../../data/siteData";
import Image from "next/image";
const HeroSection = () => {
  const { title, subtitle, description, href, textButton, desert, mecca } =
    heroSection;
  return (
    <header
      className="min-h-screen bg-cover bg-center overflow-hidden text-white py-4"
      style={{ backgroundImage: `url('../../assets/images/background.png')` }}
      role="img"
      aria-label=""
      id="Header"
    >
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        viewport={{ once: true }}
        className="container flex flex-col items-center justify-center max-h-max lg:h-screen"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="">
            <p className="text-primary text-lg max-w-2xl mx-auto opacity-60 mb-2">
              {subtitle}
            </p>
            <h1 className="text-black text-4xl sm:text-5xl md:text-[64px] max-w-3xl font-semibold mb-8">
              Welcome to{" "}
              <span className="relative inline-block after:content-[''] after:block after:h-[10px] after:bg-primary after:w-full">
                {title}
              </span>
            </h1>

            <p className="text-black text-lg max-w-2xl mx-auto">
              {description}
            </p>
            <button className="mt-10 px-5 py-2 bg-white text-primary rounded-full border-2 border-primary hover:bg-primary hover:text-white transition-all duration-300 ease-in-out">
              <a href={href}>{textButton}</a>
            </button>
          </div>
          <div className="relative">
            <Image src={mecca} alt="" width={260} className="absolute top-2" />
            <Image
              src={desert}
              alt=""
              width={260}
              className="absolute top-14 right-0"
            />
          </div>
        </div>
      </motion.div>
    </header>
  );
};

export default HeroSection;
