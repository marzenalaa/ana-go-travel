import Image from "next/image";
import Link from "next/link";
import { company, footerSection } from "@/data/siteData";
import { ChevronRight } from "lucide-react";

const Footer = () => {
  const { whiteLogo, name } = company;
  const { title, socialLinks, quickLinks, contactInfo } = footerSection;
  return (
    <footer className="bg-blackDark text-white pt-16">
      <div className="container grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <Link href="/">
            <Image src={whiteLogo} alt={name} width={150} height={150} />
          </Link>
          <p className="my-4">{title}</p>
          <ul className="flex items-center justify-start gap-8">
            {socialLinks.map((link) => (
              <li key={link.name} className="mb-2">
                <Link href={link.link} target="_blank">
                  <Image
                    src={link.logo}
                    alt={link.name}
                    width={25}
                    height={25}
                  />
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
          <ul>
            {quickLinks.map((link, index) => (
              <li className="mb-3">
                <Link
                  href={link.link}
                  className="hover:text-primary flex items-center gap-1 transition-transform duration-300 hover:translate-x-2"
                >
                  <ChevronRight size={15} /> {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-lg mb-4">Need help?</h4>
          <ul>
            {contactInfo.map((info, index) => (
              <li key={index} className="">
                <h4 className="font-semibold mb-1 text-gray-400">
                  {info.title}
                </h4>
                <Link
                  href={info.link}
                  className={`flex items-center gap-2 text-sm hover:text-primary transition duration-300 ease-in-out ${
                    index === contactInfo.length - 1 ? null : "mb-2"
                  }`}
                  target="_blank"
                >
                  <span>{info.icon}</span>
                  <p>{info.content}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-lg mb-4">
            Subscribe to Our Newsletter
          </h4>
          <div className="mt-4">
            <form>
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-gray-800 text-white px-4 py-2 w-full mb-2"
              />
              <button className="bg-primary text-white px-4 py-2 w-full">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 py-4 text-center mt-8">
        <p>
          {`©${new Date().getFullYear()} `}
          <span className="text-primary font-medium">Ana Go Travel</span>
          {`. All rights reserved.`}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
