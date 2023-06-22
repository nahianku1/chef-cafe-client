import { useContext, useRef, useState } from "react";
import { FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { AuthContext } from "../../AuthProvider";
import { IoPersonSharp } from "react-icons/io5";

function Register() {
  let [hidden, setHidden] = useState(true);
  let [error, setError] = useState("");
  let usernameRef = useRef("");
  let emailRef = useRef("");
  let passwordRef = useRef("");
  let photoRef = useRef("");
  let navigate = useNavigate();
  let { auth } = useContext(AuthContext);

  let modifyError = (error) => {
    let modifiedMessage = error.message
      .split("/")[1]
      .split(")")[0]
      .split("-")
      .map((v) => v[0].toUpperCase() + v.slice(1))
      .join(" ");
    setError(modifiedMessage);
  };

  let handleSubmit = (e) => {
    e.preventDefault();

    createUserWithEmailAndPassword(auth, emailRef.current, passwordRef.current)
      .then(() => {
        updateProfile(auth.currentUser, {
          displayName: usernameRef.current,
          photoURL: photoRef.current,
        })
          .then(() => {
            navigate("/signin");
          })
          .catch((error) => {
            modifyError(error);
          });
      })
      .catch((error) => {
        console.log(error);
        modifyError(error);
      });
  };
  return (
    <div className="flex justify-center items-center h-[100vh] bg-green-200">
      <div className="bg-white w-[320px] md:w-[400px] py-[30px] rounded-md ">
        <form
          action=""
          onSubmit={handleSubmit}
          className="flex items-center justify-center flex-col gap-4"
        >
          <div className=" mb-5 text-[100px] font-bold text-green-400">
            <IoPersonSharp />
          </div>
          <div>
            <label htmlFor="" className="block">
              Name:
            </label>
            <input
              type="text"
              className="focus:shadow-lg outline-none border border-solid border-green-400 p-1 rounded-md indent-2"
              placeholder="Name"
              onChange={(e) => {
                usernameRef.current = e.target.value;
              }}
            />
          </div>

          <div>
            <label htmlFor="" className="block">
              Email:
            </label>
            <input
              type="text"
              className="focus:shadow-lg outline-none border border-solid border-green-400 p-1 rounded-md indent-2"
              placeholder="Email"
              onChange={(e) => {
                emailRef.current = e.target.value;
              }}
              required
            />
          </div>

          <div>
            <label htmlFor="" className="block">
              Password:
            </label>
            <div className="relative">
              <input
                type={hidden ? `password` : `text`}
                className="focus:shadow-lg outline-none border border-solid border-green-400 p-1 rounded-md indent-2"
                placeholder="Password"
                onChange={(e) => {
                  passwordRef.current = e.target.value;
                }}
                required
              />
              {hidden ? (
                <FaEye
                  onClick={() => setHidden(false)}
                  className="absolute top-2.5 right-2 cursor-pointer"
                />
              ) : (
                <FaEyeSlash
                  onClick={() => setHidden(true)}
                  className="absolute top-2.5 right-2 cursor-pointer"
                />
              )}
            </div>
          </div>
          <div>
            <label htmlFor="" className="block">
              Photo URL:
            </label>
            <input
              type="text"
              className="focus:shadow-lg outline-none border border-solid border-green-400 p-1 rounded-md indent-2"
              placeholder="Photo URL"
              onChange={(e) => {
                photoRef.current = e.target.value;
              }}
            />
          </div>
          {error && !error === "Weak Password" ? (
            <p className="text-red-600 font-bold">{error}</p>
          ) : error === "Weak Password" ? (
            <p className="text-red-600 font-bold">
              Password should be at least 6 characters.
            </p>
          ) : (
            <p className="text-red-600 font-bold">{error}</p>
          )}

          <div>
            <button
              type="submit"
              className="bg-green-400 px-4 py-2 rounded-lg text-white font-bold"
            >
              Sing Up
            </button>
          </div>
          <p className="text-[15px]">
            Already have an account?{" "}
            <Link to="/signin" className="underline">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Register;
