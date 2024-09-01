import { FaCode } from "react-icons/fa";
import { FaRegCompass } from "react-icons/fa6";
import { HiMiniPencilSquare } from "react-icons/hi2";

const recommended = {
    prompts: [
        "Generate unit tests for the following C# function",
        "Suggest the best parks to visit in a city with descriptions",
        "Create an image & bedtime story",
        "Ideas to surprise a friend on their birthday"
    ],
    logos: [
        <FaCode key={1} className="lg:text-xl md:text-[20px] text-[12px] absolute bottom-2 right-3" />,
        <FaRegCompass key={2} className="lg:text-xl md:text-[20px] text-[12px] absolute bottom-2 right-3" />,
        <HiMiniPencilSquare key={3} className="lg:text-xl md:text-[20px] text-[12px] absolute bottom-2 right-3" />,
        <FaRegCompass key={4} className="lg:text-xl md:text-[20px] text-[12px] absolute bottom-2 right-3" />,
    ]
};

export default recommended;
