import { ShowMoreButtonProps } from "@/types";

const ShowMoreButton: React.FC<ShowMoreButtonProps> = ({ onClick }) => {
  return (
    <div className="mt-14">
      <button className="bg-slate-200 text-black border rounded-lg p-2" onClick={onClick}>
        Show More
      </button>
    </div>
  );
};

export default ShowMoreButton;
