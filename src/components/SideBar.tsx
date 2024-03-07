import Logo2 from "../assets/logo2.svg";
import { FaRegEdit } from "react-icons/fa";

const SideBar = ({
  handleSideOpen,
  open,
}: {
  handleSideOpen: () => void;
  open: boolean;
}) => {
  return (
    <aside
      className={`absolute top-0 z-[999999] h-screen w-64 bg-secondary-dark p-5 duration-300 ease-linear left-0 ${
        open
          ? "translate-x-0 lg:static lg:w-64 lg:-translate-x-0"
          : "-translate-x-full lg:absolute lg:w-22"
      }`}
    >
      <button
        onClick={handleSideOpen}
        className={`group absolute w-4 top-[50%] -translate-y-[50%] -right-[20px] h-8 rounded-md overflow-hidden`}
        title={open ? "Close sidebar" : "Open sidebar"}
      >
        <span className="h-full w-1.5 left-0 bg-[#9b9b9b] group-hover:bg-white duration-300 inline-block"></span>
      </button>

      <div className="flex justify-between items-center">
        <div className="text-white flex gap-x-2 items-center">
          <img
            className="bg-white p-1 rounded-full h-7 w-7"
            src={Logo2}
            alt="logo"
          />
          <p>New chat</p>
        </div>
        <button>
          <FaRegEdit className="text-white" />
        </button>
      </div>

      <div className="mt-10">
        <div>
          <p className="text-gray1 text-[12px] mb-1">Today</p>
          <ul className="text-white">
            <li className="mb-2">History title</li>
            <li className="mb-2">History title2</li>
            <li className="mb-2">History title3</li>
            <li className="mb-2">History title4</li>
            <li className="mb-2">History title5</li>
          </ul>
        </div>

        <div className="mt-10">
          <p className="text-gray1 text-[12px] mb-1">Yesterday</p>
          <ul className="text-white">
            <li className="mb-2">History title</li>
            <li className="mb-2">History title2</li>
            <li className="mb-2">History title3</li>
            <li className="mb-2">History title4</li>
            <li className="mb-2">History title5</li>
          </ul>
        </div>
      </div>
    </aside>
  );
};

export default SideBar;
