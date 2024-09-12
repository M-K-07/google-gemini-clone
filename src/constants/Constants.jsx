import { FaCode } from "react-icons/fa";
import { FaRegCompass } from "react-icons/fa6";
import { HiMiniPencilSquare } from "react-icons/hi2";

const recommended = {
    prompts: [
        "Write a Basic C program.",
        "Frequently asked ReactJs Interview Questions. ",
        "Write a blog on topic Productivity.",
        "Write an email to a recruiter for job application."
    ],
    logos: [
        <FaCode key={1} className="lg:text-xl md:text-[20px] text-[12px] absolute bottom-2 right-3" />,
        <FaRegCompass key={2} className="lg:text-xl md:text-[20px] text-[12px] absolute bottom-2 right-3" />,
        <HiMiniPencilSquare key={3} className="lg:text-xl md:text-[20px] text-[12px] absolute bottom-2 right-3" />,
        <FaRegCompass key={4} className="lg:text-xl md:text-[20px] text-[12px] absolute bottom-2 right-3" />,
    ]
};

export default recommended;
