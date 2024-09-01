import Navbar from "./Navbar";
import { IoSend } from "react-icons/io5";
import recommended from "../constants/Constants";
import { useContext } from "react";
import { AIContext } from "../context/Context";
import Response from "./Response";

const Home = ({ istoggle, setIstoggle }) => {
  const { input, setInput, showResult, gemini } = useContext(AIContext);

  return (
    <div className="bg-black w-full h-screen text-white px-5 pt-5 relative overflow-hidden">
      <Navbar istoggle={istoggle} setIstoggle={setIstoggle} />
      {showResult ? (
        <Response />
      ) : (
        <div className="body flex flex-col justify-around h-full ">
          <div
            className={`greetings pt-10 ${
              !istoggle
                ? "lg:pl-[200px] md:pl-[100px] pl-[10px]"
                : "lg:pl-[260px] md:pl-[100px] pl-[10px]"
            }`}
          >
            <h1 className="greet-heading lg:text-5xl md:text-6xl text-[50px] font-semibold tracking-tighter">
              Hello, Broo !
            </h1>
            <h1 className="greet-desc lg:text-5xl md:text-5xl text-[25px] leading-none font-semibold tracking-tighter text-[#444746] pt-2">
              How can I help you today?
            </h1>
          </div>

          <div className="cards flex lg:justify-center lg:overflow-hidden overflow-x-scroll overflow-y-hidden lg:gap-5 gap-2 w-full lg:items-center lg:mt-10 lg:mb-20 mx-4 mb-10">
            {recommended.prompts.map((prompt, index) => (
              <div
                onClick={() => {
                  setInput(prompt);
                }}
                key={index}
                className="card lg:w-[210px] w-full bg-[#1E1F20] p-4 rounded-xl lg:h-[30vh] md:h-[200px] hover:bg-[#282A2C] cursor-pointer relative"
              >
                <p className=" lg:text-[1.1vw] md:text-[17px] text-[12px] w-[100px] lg:w-auto h-[100px] lg:h-auto">
                  {prompt}
                </p>
                {recommended.logos[index]}
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="inp lg:mx-4 w-5/6 md:w-8/12 lg:w-fit overflow-hidden justify-center absolute lg:bottom-4 bottom-[9vh] left-1/2 -translate-x-1/2 flex items-center">
        <input
          type="text"
          onChange={(e) => setInput(e.target.value)}
          value={input}
          className="bg-[#1E1F20] outline-none relative lg:h-[7vh] h-[40px] resize-none text-ellipsis overflow-hidden rounded-full lg:text-[15px] text-[12px] lg:w-[900px] w-[500px] py-3 px-5"
          placeholder="Enter a prompt here"
        />

        <IoSend
          onClick={gemini}
          className="text-white absolute right-5 flex items-center justify-center rounded-full lg:w-[40px] w-[30px] lg:text-[20px] text-[15px] cursor-pointer"
        />
      </div>
    </div>
  );
};

export default Home;
