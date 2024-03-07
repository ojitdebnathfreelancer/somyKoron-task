import React, { useState } from "react";

const SideBar = () => {
  const [open, setOpen] = useState(false);

  // sidebar open close handle function
  const handleSideOpen = () => {
    setOpen((prv) => !prv);
  };

  return (
    <aside
      className={`absolute top-0 z-9999 h-screen w-64 bg-secondary-dark p-5 duration-300 ease-linear left-0 ${
        open
          ? `-translate-x-full lg:absolute lg:w-22 `
          : "translate-x-0 lg:static lg:w-64 lg:-translate-x-0"
      }`}
    >
      <button
        onClick={handleSideOpen}
        className={`group absolute w-4 top-[50%] -translate-y-[50%] -right-[20px] h-8 rounded-md overflow-hidden`}
      >
        <span className="h-full w-1.5 left-0 bg-[#9b9b9b] group-hover:bg-white duration-300 inline-block"></span>
      </button>
      <p className="text-white">this is siderbar</p>
    </aside>
  );
};

export default SideBar;
