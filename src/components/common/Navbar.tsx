import Image from "next/image";
import Link from "next/link";
import { company, navigation } from "../../data/siteData";
import { PhoneCall } from "lucide-react";

const Navbar = () => {
  const { name, logo, phone } = company;

  return (
    <nav className="container flex items-center justify-between py-3">
      <Link className="logo" href="/">
        <Image src={logo} alt={`${name} logo`} width={100} height={100} />
      </Link>
      <ul className="hidden lg:flex justify-center gap-6">
        {navigation.map((navItem) => (
          <li
            key={navItem.name}
            className="text-black relative block font-medium after:content-[''] after:block after:absolute after:h-[2px] after:bg-primary after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left"
          >
            <Link href={navItem.page}>{navItem.name}</Link>
          </li>
        ))}
      </ul>
      <Link
        href={`tel:${phone}`}
        target="_blank"
        className="flex items-center justify-center gap-2"
      >
        <PhoneCall size={20} /> {phone}
      </Link>
    </nav>
  );
};

export default Navbar;
