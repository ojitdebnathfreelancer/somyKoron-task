import { useState } from "react";
import { FaArrowUp } from "react-icons/fa6";

const MessageField = ({
  setSendMessage,
}: {
  setSendMessage: (message: string) => void;
}) => {
  const [message, setMessage] = useState("");
  const isDisabled = message.length === 0;

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSendMessage(message);
  };

  const handelEnter = (event: React.FormEvent<HTMLFormElement>) => {
    if (event.key === "Enter") {
      setSendMessage(message);
    }
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        onKeyDown={handelEnter}
        className="flex border border-gray1 rounded-lg overflow-hidden px-3 py-4"
      >
        <textarea
          rows={1}
          className="bg-primary-dark w-full resize-none placeholder:font-semibold no-scrollbar outline-none caret-white text-white"
          placeholder="Message ChatGPT..."
          onChange={(e) => setMessage(e.target.value)}
        />
        <button
          disabled={isDisabled}
          className={` ${
            isDisabled ? "bg-gray1/50" : "bg-white"
          } rounded-lg p-2`}
          title="Send message"
          type="submit"
        >
          <FaArrowUp size={15} className="font-bold" />
        </button>
      </form>
      <p className="text-gray1 text-center text-[14px] my-1.5">
        ChatGPT can make mistakes. Consider checking important information.
      </p>
    </div>
  );
};

export default MessageField;
