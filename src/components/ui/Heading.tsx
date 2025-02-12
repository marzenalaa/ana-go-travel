const Heading = ({
  title,
  subtitle,
  className,
}: {
  title: string;
  subtitle: string;
  className: string;
}) => {
  return (
    <div className={className}>
      <h3 className="mt-2 mb-3 sm:text-4xl text-3xl tracking-tight font-semibold">
        {title}
      </h3>
      <p className="font-medium tracking-widest text-primary">{subtitle}</p>
    </div>
  );
};

export default Heading;
