interface buttonProps {
  text: string;
  href: string;
  className?: string;
}
const Button = ({ text, href, className }: buttonProps) => {
  return (
    <button className={`py-3 px-8 rounded-lg font-medium ${className}`}>
      <a href={href}>{text}</a>
    </button>
  );
};

export default Button;
