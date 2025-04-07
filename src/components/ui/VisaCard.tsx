import Image from "next/image";
import { Button } from ".";

const VisaCard = ({
  image,
  visaTitle,
  visaDescription,
  icon,
}: {
  image: string;
  visaTitle: string;
  visaDescription: string;
  icon: React.ReactNode;
}) => {
  return (
    <li className="rounded-3xl p-4 grid grid-cols-2 items-center gap-2 bg-white border border-gray-300 shadow-lg transition duration-500 ease-in-out transform hover:-translate-y-1 hover:shadow-2xl cursor-pointer">
      <div className="flex items-center justify-center">
        <Image src={image} alt={visaTitle} width={200} height={200} />
      </div>
      <div className="content">
        <h4 className="font-medium text-xl text-primary">{visaTitle}:</h4>
        <p className="text-sm text-gray-900 my-4">{visaDescription}</p>
        <div className="flex items-center justify-between mt-2">
          <Button text={`More`} href="#" className="!mt-0 py-1" />
          <span>{icon}</span>
        </div>
      </div>
    </li>
  );
};

export default VisaCard;
