import { createContext, useState } from "react";
import run from "../config/gemini";

export const AIContext = createContext();

const AIContextProvider = (props) => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [displayInput, setDisplayInput] = useState("");
  const [recentChats, setRecentChats] = useState([]);

  const delayPara = (i, word) => {
    setTimeout(() => {
      setResult((prev) => prev + word);
    }, 75*i);
  };

  const gemini = async () => {
    setResult("");
    setLoading(true);
    setShowResult(true);
    setDisplayInput(input);
    const res = await run(input);
    setInput("");

    let newResponse = res.split(" ");
    
    for (let i = 0; i < newResponse.length; i++) {
      const next = newResponse[i];
      delayPara(i, next + " ");
    }
    
    // console.log(res);
    setLoading(false);
    setRecentChats((prevChats) => [
      { text: input, response: res },
      ...prevChats,
    ]);
  };

  const values = {
    input,
    setInput,
    result,
    setResult,
    loading,
    setLoading,
    showResult,
    setShowResult,
    gemini,
    displayInput,
    setDisplayInput,
    recentChats,
    setRecentChats,
  };

  return (
    <AIContext.Provider value={values}>{props.children}</AIContext.Provider>
  );
};
export default AIContextProvider;
