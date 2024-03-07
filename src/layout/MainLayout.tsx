import React, { ReactNode } from "react";
import SideBar from "../components/SideBar";

type ParentProps = {
  children: ReactNode;
};

const MainLayout: React.FC<ParentProps> = ({ children }) => {
  return (
    <div className="flex h-screen overflow-hidden">
      <SideBar />
      <main className="">
        <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
          {children}
        </div>
      </main>
    </div>
  );
};

export default MainLayout;
