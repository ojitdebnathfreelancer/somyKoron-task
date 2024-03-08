import You from "../assets/you.png";
import Logo2 from "../assets/logo.png";

interface ChatMessage {
  user: string;
  boot: string;
}

const MessageDisplay = ({
  isLoading,
  chatData,
}: {
  isLoading: boolean;
  chatData: ChatMessage[];
}) => {
  return (
    <div className="lg:ml-10 md:ml-5 ml-2 text-white overflow-y-scroll no-scrollbar">
      {chatData?.length ? (
        <>
          {chatData.map((chat, i) => (
            <div className="mb-10" key={i + 1}>
              {chat?.user && (
                <div className="mb-10">
                  <p className="flex items-center gap-x-3 font-semibold">
                    <img
                      src={You}
                      alt="user image"
                      className="h-8 w-8 rounded-full"
                    />
                    <span>You</span>
                  </p>
                  <p className="ml-10">{chat?.user}</p>
                </div>
              )}

              {isLoading && <p>Generating...</p>}

              {chat?.boot && (
                <div>
                  <p className="flex items-center gap-x-3 font-semibold">
                    <img
                      src={Logo2}
                      alt="user image"
                      className="h-8 w-8 rounded-full bg-green-600 fill-white"
                    />
                    <span>ChatGPT</span>
                  </p>
                  <p className="ml-10">{chat?.boot}</p>
                </div>
              )}
            </div>
          ))}
        </>
      ) : (
        <div className="h-[75vh] flex justify-center items-center">
          <p className="text-2xl font-semibold">Write something for get info</p>
        </div>
      )}
    </div>
  );
};

export default MessageDisplay;
