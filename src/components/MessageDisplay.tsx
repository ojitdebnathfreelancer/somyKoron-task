import You from "../assets/you.png";
import Logo2 from "../assets/logo.png";

const MessageDisplay = () => {
  return (
    <div className="lg:ml-10 md:ml-5 ml-2 text-white overflow-y-scroll no-scrollbar">
      <div className="mb-10">
        <p className="flex items-center gap-x-3 font-semibold">
          <img src={You} alt="user image" className="h-8 w-8 rounded-full" />
          <span>You</span>
        </p>
        <p className="ml-10">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, sint
          nulla recusandae pariatur quia fugit vitae, quisquam reprehenderit
          quod voluptate magnam illo officia porro inventore minima! Quaerat
          fugit ipsa neque?
        </p>
      </div>

      <div>
        <p className="flex items-center gap-x-3 font-semibold">
          <img
            src={Logo2}
            alt="user image"
            className="h-8 w-8 rounded-full bg-green-600 fill-white"
          />
          <span>ChatGPT</span>
        </p>
        <p className="ml-10">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, sint
          nulla recusandae pariatur quia fugit vitae, quisquam reprehenderit
          quod voluptate magnam illo officia porro inventore minima! Quaerat
          fugit ipsa neque?
        </p>
      </div>
    </div>
  );
};

export default MessageDisplay;
