import { useContext, useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { AuthContext } from "../../AuthProvider";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import { FaBars, FaHeart } from "react-icons/fa";
import {
  IoPersonCircleSharp,
  IoMoon,
  IoSunnySharp,
  IoCodeOutline,
} from "react-icons/io5";
import Sidebar from "../Sidebar/Sidebar";
import LoveSign from "../LoveSign/LoveSign";
import { FavContext } from "../../App";

function Header() {
  console.log(`Rendered`);
  let navigate = useNavigate();
  let [open, setOpen] = useState(false);
  let [theme, setTheme] = useState("light");
  let { favstate } = useContext(FavContext);

  console.log(favstate);

  let { auth, user } = useContext(AuthContext);
  let handleLogout = () => {
    signOut(auth);
    navigate("/signin");
  };
  useEffect(() => {
    if (theme === "light") {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
  }, [theme]);

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme:dark)").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  return (
    <div>
      {open && <Sidebar setOpen={setOpen} />}
      <div>
        <title>{auth?.currentUser?.displayName}</title>
      </div>
      <nav className="p-[8px] bg-lime-500 dark:bg-slate-900 text-brown dark:text-white flex justify-between items-center">
        <div className="flex gap-3 ">
          <h1 className="font-pacifico cursor-pointer">
            <Link to="/">Fantasy Recipes</Link>
          </h1>
          <div className="hidden gap-3  md:flex">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/blog">Blog</NavLink>
            <div className=" relative">
              {favstate > 0 ? <LoveSign count={favstate} /> : ""}

              <NavLink to="/favorite">Favorites</NavLink>
            </div>
          </div>
          <button
            onClick={() => setOpen(true)}
            className="inline-block text-black md:hidden"
          >
            <FaBars className="dark:text-white" />
          </button>
        </div>
        <div className="flex items-center  gap-4">
          {theme === "light" ? (
            <IoMoon
              className="cursor-pointer text-2xl font-bold"
              onClick={() => setTheme("dark")}
            />
          ) : (
            <IoSunnySharp
              className="cursor-pointer text-2xl font-bold"
              onClick={() => setTheme("light")}
            />
          )}
          {user && user?.photoURL ? (
            <>
              <Link to="/userprofile">
                <img
                  data-tooltip-id="registerTip"
                  data-tooltip-content={auth?.currentUser?.displayName}
                  src={auth?.currentUser?.photoURL}
                  className=" cursor-pointer w-[40px] h-[40px] object-cover object-center rounded-full"
                />
              </Link>

              <Tooltip id="registerTip" place="top" effect="solid" />
            </>
          ) : user && !user?.photoURL ? (
            <Link to="/userprofile">
              <IoPersonCircleSharp className="text-3xl cursor-pointer" />
            </Link>
          ) : (
            ""
          )}

          {user ? (
            <button className="font-bold" onClick={handleLogout}>
              Sign Out
            </button>
          ) : (
            <button className="font-bold">
              <Link to="/signin">Sign In</Link>
            </button>
          )}
        </div>
      </nav>
    </div>
  );
}

export default Header;
