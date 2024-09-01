import { FaUserCircle } from "react-icons/fa";
import { RiMenu2Fill } from "react-icons/ri";

const Navbar = ({ setIstoggle }) => {
  return (
    <div className="flex justify-end gap-[30vw] md:gap-[40vw] lg:justify-between lg:gap-0 lg:px-5 items-center">
      <RiMenu2Fill
        onClick={() => setIstoggle((prev) => !prev)}
        className="text-white sticky lg:fixed top-6 z-10 lg:left-7 text-2xl cursor-pointer"
      />
      <h1 className="text-xl text-white cursor-pointer">Gemini</h1>
      <FaUserCircle className="text-3xl text-zinc-500" />
    </div>
  );
};

export default Navbar;
