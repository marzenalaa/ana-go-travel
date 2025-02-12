import Image from "next/image";
import { company, navigation } from "../../data/siteData";
import Link from "next/link";
import { PhoneCall } from "lucide-react";

const Navbar = () => {
  const { name, logo, phone } = company;

  return (
    <nav className="container flex items-center justify-between py-3">
      <Link className="logo" href="/">
        <Image src={logo} alt={`${name} logo`} width={100} height={100} />
      </Link>
      <ul className="hidden lg:flex justify-center gap-6">
        {navigation.map((navItem, index) => (
          <li
            key={index}
            className="text-primary relative block font-medium after:content-[''] after:block after:absolute after:h-[2px] after:bg-primary after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left"
          >
            <Link href={navItem.page}>{navItem.name}</Link>
          </li>
        ))}
      </ul>
      <a
        href={`tel:${phone}`}
        target="_blank"
        className="flex items-center justify-center gap-2 text-primary"
      >
        <PhoneCall size={20} /> {phone}
      </a>
    </nav>
  );
};

export default Navbar;
