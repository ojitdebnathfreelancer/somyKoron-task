import { FaRegEdit } from "react-icons/fa";
import { AiOutlineDownload } from "react-icons/ai";

const Header = ({ open }: { open: boolean }) => {
  return (
    <div className="flex absolute w-full top-0 z-[1] justify-between px-3 py-4 bg-primary-dark">
      <div className="flex gap-x-4">
        {!open && (
          <button className="border rounded-lg shadow-md border-gray1 p-2">
            <FaRegEdit size={15} className="text-white" />
          </button>
        )}
        <p className=" text-white font-semibold text-xl">
          ChatGPT <span className="text-gray1">3.5</span>
        </p>
      </div>

      <button>
        <AiOutlineDownload size={20} className="text-white font-bold" />
      </button>
    </div>
  );
};

export default Header;
