import { useEffect, useState } from "react";
import SideBar from "../components/SideBar";
import Header from "../components/Header";
import MessageField from "../components/MessageField";
import MessageDisplay from "../components/MessageDisplay";

const MainLayout = () => {
  interface ChatMessage {
    user: string;
    boot: string;
  }

  const [open, setOpen] = useState<boolean>(true);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [sendMessage, setSendMessage] = useState<string>("");
  const [chatData, setChatData] = useState<ChatMessage[]>([]);

  // sidebar open close handle function
  const handleSideOpen = () => {
    setOpen((prv) => !prv);
  };

  // data fetching according by user prompt
  useEffect(() => {
    if (!sendMessage) return;
    let ignore = false;

    const sendPrompt = async () => {
      try {
        setIsLoading(true);
        const response = await fetch("http://localhost:5000/", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({ prompt: sendMessage }),
        });

        const data = await response.json();

        if (!ignore) {
          setChatData([
            ...chatData,
            { boot: data.join().replace(/,/g, ""), user: sendMessage },
          ]);

          setSendMessage("");
        }
      } catch (error) {
        console.error(error);
      }
    };

    sendPrompt();

    return () => {
      ignore = true;
    };
  }, [sendMessage]);

  console.log(chatData);

  return (
    <div className="flex h-screen overflow-hidden">
      <SideBar handleSideOpen={handleSideOpen} open={open} />
      <main className="w-full relative">
        <Header open={open} />
        <div className="max-w-3xl h-full mx-auto pt-16 flex flex-col justify-between lg:px-0 md:px-5 px-2">
          <MessageDisplay isLoading={isLoading} chatData={chatData} />
          <MessageField setSendMessage={setSendMessage} />
        </div>
      </main>
    </div>
  );
};

export default MainLayout;
