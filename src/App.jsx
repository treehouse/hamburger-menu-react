import { useState } from "react";

const App = () => {
  const [activeMenu, setActiveMenu] = useState(false);
  return (
    <div className="h-screen bg-zinc-300">
      {/* off-screen menu */}
      <div
        className={`${
          activeMenu ? "right-0" : "-right-[400px]"
        } h-screen w-full max-w-[400px] bg-zinc-800 absolute top-0 duration-500`}
      >
        <ul className="text-white p-5 text-5xl font-bold mt-20">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
      <nav className="w-full bg-zinc-900 p-3 flex justify-between">
        <h1 className="text-white text-2xl">My Website</h1>
        <div
          onClick={() => {
            setActiveMenu(!activeMenu);
          }}
          className={`${activeMenu && "active"} ham-menu`}
        >
          <span className=""></span>
          <span className=""></span>
          <span className=""></span>
        </div>
      </nav>
    </div>
  );
};
export default App;
