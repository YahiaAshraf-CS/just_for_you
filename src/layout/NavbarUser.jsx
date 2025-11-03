import React from "react";
import ButtonLight from "../components/buttons/ButtonLight";
import ButtonPink from "../components/buttons/ButtonPink";
import logo from "../assets/images/logoimg.jpeg";
import "../style/Navbar.css";
import { useNavigate } from "react-router";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

function NavbarUser() {
    const navigate = useNavigate();
    // يطبع اسم المستخدم الحالي لو موجود
    const [currentUser, setCurrentUser] = useState(null);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("currentUser"));
        setCurrentUser(user);
    }, []);
    const handleLogOut = () => {
        localStorage.removeItem("currentUser");
        navigate("/just_for_you/");
    };

    const linkClass =
        "px-4 py-2 rounded-2xl  rounded-2xl cursor-pointer text-pink-500 hover:text-yellow-500 border-2 border-amber-400 bg-amber-400 hover:bg-transparent border-2  hover:bg-transparent  transition  ease-in-out duration-300 ";
    const linkClass1 =
        "px-4 py-2 rounded-2xl rounded-2xl cursor-pointer text-white hover:text-pink-600 border-2 border-[var(--color-prinky)] hover:bg-transparent bg-[var(--color-prinky)] transition ease-in-out duration-300";
    return (
        <>
            <nav className=" sm:w-full md:w-full lg:w-full w-full h-fit  shadow-2xl shadow-pink-300 bg-pink-10 flex items-center justify-between gap-6 md:justify-evenly md:gap-10 lg:justify-around xl:justify-between   px-4 py-3 flex-wrap">
                <div className="logo  w-fit h-fit px-2.5 flex justify-center items-center hover:text-white gap-3 py-1.5 bg-[var(--color-prinky)] rounded-3xl shadow-sm mr-6 hover:bg-pink-800 cursor-pointer transition-all duration-300 ease-in-out hover:scale-3d">
                    <img src={logo} alt="" width={40} height={45} className=" rounded-tl-2xl rounded-br-2xl" />
                    <p className=" text-var[(--color-prinky)] text-2xl">hello {currentUser ? currentUser.firstName : ""}</p>
                </div>
                {/* Right side (desktop) */}
                <div className="hidden  md:flex space-x-6">
                    <NavLink to="/product" className={({ isActive }) => `${linkClass1} ${isActive ? "bg-pink-600 border-pink-500 text-white" : ""}`}>
                        Products
                    </NavLink>
                    <NavLink to="/WishList" className={({ isActive }) => `${linkClass1} ${isActive ? "bg-pink-600 border-pink-500 text-white" : ""}`}>
                        Wishlist
                    </NavLink>
                    <button onClick={handleLogOut} className={linkClass}>
                        Logout
                    </button>
                </div>

                {/* Mobile menu button */}
                <div className="md:hidden">
                    <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none cursor-pointer">
                        {isOpen ? "✖" : "☰"}
                    </button>
                </div>

                {/* Mobile dropdown */}
                {isOpen && (
                    <div className="md:hidden absolute rounded-2xl cursor-pointer right-0 top-[9%] w-48 bg-pink-200 px-4 pt-2 pb-3 space-y-2">
                        <NavLink to="/product" className={({ isActive }) => `${linkClass1} block flex justify-center items-center w-full text-left ${isActive ? "bg-pink-800" : ""}`}>
                            Products
                        </NavLink>
                        <NavLink to="/wish" className={({ isActive }) => `${linkClass1} block flex justify-center items-center w-full text-left ${isActive ? "bg-pink-800" : ""}`}>
                            Wishlist
                        </NavLink>
                        <button onClick={handleLogOut} className={linkClass + "block flex justify-center items-center w-full text-left px-3 py-2  hover:bg-pink-800"}>
                            Logout
                        </button>
                    </div>
                )}
            </nav>
        </>
    );
}

export default NavbarUser;
