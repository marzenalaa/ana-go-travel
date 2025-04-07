const FeaturesCard = ({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) => {
  return (
    <div className="flex items-center justify-center gap-6 w-full md:w-auto">
      <div className="flex items-center justify-center">{icon}</div>
      <div>
        <h3 className="mb-1 text-lg font-medium">{title}</h3>
        <p className="text-gray-700">{description}</p>
      </div>
    </div>
  );
};

export default FeaturesCard;
