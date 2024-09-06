import { FiPlus } from "react-icons/fi";
import { FaRegMessage } from "react-icons/fa6";
import { AIContext } from "../context/Context";
import { useContext } from "react";
import help_icon from '../assets/help.png'
import history_icon from '../assets/history-con.png'
import setting_icon from '../assets/settongs-icon.png'


const Sidebar = ({ istoggle }) => {
  const { recentChats, setShowResult,setDisplayInput, setResult } = useContext(AIContext);


  const displayRecent=(chat)=>{
    setDisplayInput(chat.text)
    setResult(chat.response)
    setShowResult(true)
  }

  return (
    <div
      className={`h-full  lg:relative absolute overflow-hidden flex transition-all duration-200 z-10 ${!istoggle ? 'lg:w-[20%] md:w-[40%] w-[60%]':'lg:w-fit lg:p-5 w-0'} flex-col justify-between bg-[#1E1F20] ${!istoggle && 'p-5 lg:py-5 py-10'} `}
    >
      <div className="top">
        <div
          onClick={() => {
            setShowResult(false);
          }}
          className="btn mt-16 bg-[#1A1A1C] flex gap-3 items-center w-fit text-[#5F6667] cursor-pointer font-semibold py-3 px-3 rounded-full"
        >
          <FiPlus className="text-xl" />
          {!istoggle && <p className="lg:text-sm md:text-xl text-[14px] block ">New Chat</p>}
        </div>
        <div className={`recent ${!istoggle && "min-w-[15vw]"} py-3`}>
          {!istoggle && <h1 className="text-white px-3 py-4 lg:text-[20px] md:text-xl text-[16px] ">Recent</h1>}
          <div className="chats overflow-y-scroll max-h-[50vh]">

          {recentChats.map((chat, index) => (
            <div
            key={index}
            onClick={() => displayRecent(chat)}
            className="chat text-white flex items-center gap-4 w-4/4 cursor-pointer hover:bg-[#282A2C] rounded-full px-3 py-2"
            >
              {!istoggle && <FaRegMessage />}
              {!istoggle && (
                <p className="lg:text-sm w-full truncate">{chat.text.length>30 ? `${chat.text.slice(0,40)}...`: chat.text}</p>
              ) }
            </div>
          ))}
          </div>
        </div>
      </div>

      <div className="bottom">
        <div className="help flex items-center gap-4 cursor-pointer hover:bg-[#282A2C] rounded-full px-3 py-2">
          <img src={help_icon} className="w-[20px]  invert" alt="" />
          {!istoggle && <p className="text-white lg:text-sm md:text-xl text-[15px]">Help</p>}
        </div>
        <div className="help flex items-center gap-4 cursor-pointer hover:bg-[#282A2C] rounded-full px-3 py-2">
        <img src={history_icon} className="w-[20px]  invert" alt="" />
        {!istoggle && <p className="text-white lg:text-sm md:text-xl text-[15px]">History</p>}
        </div>
        <div className="help flex items-center gap-4 cursor-pointer hover:bg-[#282A2C] rounded-full px-3 py-2">
        <img src={setting_icon} className="w-[20px]  invert" alt="" />
        {!istoggle && <p className="text-white lg:text-sm md:text-xl text-[15px]">Settings</p>}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
