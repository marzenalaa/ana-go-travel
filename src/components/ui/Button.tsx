import Link from "next/link";

interface buttonProps {
  text: string;
  href: string;
  className?: string;
}
const Button = ({ text, href, className }: buttonProps) => {
  return (
    <button
      className={`mt-10 px-5 py-2 bg-white text-primary rounded-full border-2 border-primary hover:bg-primary hover:text-white transition-all duration-300 ease-in-out ${className}`}
    >
      <Link href={href}>{text}</Link>
    </button>
  );
};

export default Button;
