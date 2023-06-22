import React from "react";
import { NavLink } from "react-router-dom";

function Sidebar({ setOpen }) {
  return (
    <div className="flex  flex-col gap-3 items-start p-[20px] justify-start fixed z-50 inset-0 min-h-screen w-[200px] bg-white shadow-lg shadow-slate-400">
      <button
        onClick={() => setOpen(false)}
        className=" absolute bg-gray-200 right-2 top-2 border-none p-[3px] font-normal text-lg cursor-pointer rounded-[50%] w-[30px] h-[30px] flex items-center justify-center"
      >
        X
      </button>
      <NavLink
        to="/"
        className="link"
        onClick={() => setOpen(false)}
      >
        Home
      </NavLink>
      <NavLink className="link" to="/about" onClick={() => setOpen(false)}>
        About
      </NavLink>

      <NavLink className="link" to="/blog" onClick={() => setOpen(false)}>
        Blog
      </NavLink>
      <NavLink className="link" to="/favorite" onClick={() => setOpen(false)}>
        Favorite
      </NavLink>
    </div>
  );
}

export default Sidebar;
