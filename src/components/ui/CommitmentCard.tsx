interface CommitmentCardProps {
  bgColor: string;
  commitmentTitle: string;
  commitmentDescription: string;
  commitmentContent: string[];
}
const CommitmentCard = ({
  bgColor,
  commitmentTitle,
  commitmentDescription,
  commitmentContent,
}: CommitmentCardProps) => {
  return (
    <li
      className={`flex justify-between gap-8 border border-blackDark rounded-3xl p-8 overflow-hidden h-full lg:h-72 border-b-4 border-b-blackDark bg-neutralBeige cursor-pointer transition duration-500 ease-in-out transform hover:-translate-y-1`}
    >
      <div className="flex flex-col">
        <h4 className={`text-xl font-semibold`}>{commitmentTitle}</h4>
        <p className="py-2 text-justify">{commitmentDescription}</p>
        <ul>
          {commitmentContent.map((content, index) => (
            <li key={index} className="text-gray-800">
              <span>- {content}</span>
            </li>
          ))}
        </ul>
      </div>
    </li>
  );
};
export default CommitmentCard;
