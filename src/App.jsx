import { useState } from "react";
import Home from "./components/Home";
import Sidebar from "./components/Sidebar";

const App = () => {
  const [istoggle, setIstoggle] = useState(true);
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar istoggle={istoggle} setIstoggle={setIstoggle} />
      <Home istoggle={istoggle} setIstoggle={setIstoggle} />
    </div>
  );
};

export default App;
