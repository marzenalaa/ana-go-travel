const Heading = ({
  title,
  subtitle,
  description,
  className,
}: {
  title: string;
  subtitle: string;
  description?: string;
  className?: string;
}) => {
  return (
    <div className={className}>
      <h3 className="mt-2 mb-3 sm:text-4xl text-3xl tracking-tight font-semibold">
        {title}
      </h3>
      <p className="font-medium tracking-widest text-primary">{subtitle}</p>
      <p className="text-center w-full md:w-2/3 text-gray-900 mx-auto my-4">
        {description}
      </p>
    </div>
  );
};

export default Heading;
