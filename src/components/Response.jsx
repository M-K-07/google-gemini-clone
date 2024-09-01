import { useContext } from "react";
import { FaUserCircle } from "react-icons/fa";
import { AIContext } from "../context/Context";
import gemini_icon from "../assets/gemini-icon.png";

const Response = () => {
  const { displayInput, result, loading } = useContext(AIContext);
  const pattern = /[*#'`]/g;
  const geminiResponse = result.replace(pattern, "");

  return (
    <div className="display-res lg:max-h-[80vh] max-h-[77vh] overflow-y-scroll">
      <div className="user-inp flex lg:mx-36 mx-4 lg:mt-16 mt-8 items-center gap-3 lg:gap-5">
        <FaUserCircle className="w-8 lg:w-10 text-xl lg:text-2xl" />
        <p className="text-white bg-zinc-800 p-3 rounded-full text-base lg:text-[18px]">
          {displayInput}
        </p>
      </div>
      <div className="res flex lg:mx-36 mx-4 lg:mt-10 mt-6 items-start gap-3 lg:gap-5 relative">
        <div className="w-8 lg:w-9 h-8 lg:h-9 overflow-hidden flex-shrink-0">
          <img
            src={gemini_icon}
            alt="gemini-icon"
            className={`${loading && "gemini-icon"} w-full h-full`}
          />
        </div>
        <pre className="text-zinc-300 text-sm lg:text-lg whitespace-pre-wrap">
          {geminiResponse}
        </pre>
      </div>
    </div>
  );
};

export default Response;
