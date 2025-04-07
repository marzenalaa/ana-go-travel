const ServicesCard = ({
  icon,
  titleService,
  descriptionService,
}: {
  icon: React.ReactNode;
  titleService: string;
  descriptionService: string;
}) => {
  return (
    <li className="flex flex-col items-center justify-center cursor-pointer mx-auto bg-white py-8 p-4 rounded-3xl border border-gray-300 shadow-lg transition duration-500 ease-in-out transform hover:-translate-y-1 hover:shadow-2xl">
      <span className="rounded-full p-3 text-white bg-primary flex items-center justify-center">
        {icon}
      </span>
      <h3 className="text-xl font-bold mt-4">{titleService}</h3>
      <p className="text-center text-gray-800 mt-2">{descriptionService}.</p>
    </li>
  );
};

export default ServicesCard;
