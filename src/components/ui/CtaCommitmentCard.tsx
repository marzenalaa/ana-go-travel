import Link from "next/link";
import React from "react";

interface LinkProps {
  href: string;
  type: string;
  text: string;
}

interface CtaCommitmentCardProps {
  icon: React.ReactNode;
  title: string;
  link: LinkProps;
}
const CtaCommitmentCard = ({ icon, title, link }: CtaCommitmentCardProps) => {
  return (
    <li className="flex items-center justify-center text-lg">
      <span className=" text-gray-900 mr-2">{icon}</span>
      {title}
      <Link
        className="ml-2 text-blackDark transition ease-in-out duration-500 underline hover:text-primaryDark"
        href={link.href}
        target={link.type === "page" ? "_blank" : "_self"}
      >
        {link.text}
      </Link>
    </li>
  );
};

export default CtaCommitmentCard;
