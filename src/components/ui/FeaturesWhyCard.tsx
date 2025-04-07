import { BadgeCheck } from "lucide-react";

const FeaturesWhyCard = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <div className="flex items-center flex-wrap text-left my-2 gap-1">
      <BadgeCheck size={15} className="text-primary mr-1" />
      <h5 className="font-medium w-52">{`${title} : `}</h5>
      <p className="text-gray-900 text-sm"> {` ${description}.`}</p>
    </div>
  );
};

export default FeaturesWhyCard;
