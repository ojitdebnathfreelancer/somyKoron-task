import { useState } from "react";
import SideBar from "../components/SideBar";
import Header from "../components/Header";
import MessageField from "../components/MessageField";
import MessageDisplay from "../components/MessageDisplay";

const MainLayout = () => {
  const [open, setOpen] = useState(true);
  const [sendMessage, setSendMessage] = useState<string>("");

  // sidebar open close handle function
  const handleSideOpen = () => {
    setOpen((prv) => !prv);
  };

  console.log(sendMessage);

  return (
    <div className="flex h-screen overflow-hidden">
      <SideBar handleSideOpen={handleSideOpen} open={open} />
      <main className="w-full relative">
        <Header open={open} />
        <div className="max-w-3xl h-full mx-auto pt-16 flex flex-col justify-between lg:px-0 md:px-5 px-2">
          <MessageDisplay />
          <MessageField setSendMessage={setSendMessage} />
        </div>
      </main>
    </div>
  );
};

export default MainLayout;
