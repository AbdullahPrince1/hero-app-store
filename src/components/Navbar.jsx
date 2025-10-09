import { Link, NavLink } from "react-router";
import { FaGithub, FaHome, FaAppStore } from "react-icons/fa";
import { MdInstallDesktop } from "react-icons/md";
export default function Navbar() {
  return (
    <>
      <header className=" bg-white relative">
        <nav className="flex justify-between items-center text-black max-w-7xl mx-auto p-5">
          <Link to="/" className="flex items-center ">
            <figure>
              <img src="/logo.png" alt="logo" className="h-10" />
            </figure>
            <span className="font-bold ">HERO.IO</span>
          </Link>

          <div className="sm:flex items-center gap-8 hidden">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `flex items-center font-semibold gap-2 ${
                  isActive ? "text-blue-400" : ""
                }`
              }
            >
              <FaHome /> Home
            </NavLink>
            <NavLink
              to="/apps"
              className={({ isActive }) =>
                `flex items-center font-semibold gap-2 ${
                  isActive ? "text-blue-400" : ""
                }`
              }
            >
              <FaAppStore /> Apps
            </NavLink>
            <NavLink
              to="/installation"
              className={({ isActive }) =>
                `flex items-center font-semibold gap-2 ${
                  isActive ? "text-blue-400" : ""
                }`
              }
            >
              <MdInstallDesktop />
              Installation
            </NavLink>
          </div>

          <Link
            to="https://github.com/AbdullahPrince1"
            className="flex items-center font-semibold gap-2.5 seeBtn px-4 py-2 rounded"
          >
            <FaGithub />
            <span>Contribute</span>
          </Link>

          <div class="sm:hidden fixed bottom-0 left-0 z-50 w-full h-16 bg-white border-t border-t-gray-200">
            <div class="grid h-full max-w-lg grid-cols-3 mx-auto font-medium px-4">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `flex items-center font-semibold gap-2 ${
                    isActive ? "text-blue-400" : ""
                  }`
                }
              >
                <FaHome /> Home
              </NavLink>
              <NavLink
                to="/apps"
                className={({ isActive }) =>
                  `flex items-center font-semibold gap-2 ${
                    isActive ? "text-blue-400" : ""
                  }`
                }
              >
                <FaAppStore /> Apps
              </NavLink>
              <NavLink
                to="/installation"
                className={({ isActive }) =>
                  `flex items-center font-semibold gap-2 ${
                    isActive ? "text-blue-400" : ""
                  }`
                }
              >
                <MdInstallDesktop />
                Installation
              </NavLink>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
