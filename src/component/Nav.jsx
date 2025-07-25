import React, { useEffect, useRef, useState } from "react";
import { FaRegHeart } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { MdShoppingCart } from "react-icons/md";
import { useSelector, useDispatch } from 'react-redux';
import { FaUserCircle } from "react-icons/fa";
import { logout } from "../Redux/slice/userSlice.jsx";

export default function Nav() {
    const user = useSelector((state) => state.user.loggedInUser)
    const data = useSelector((state) => state.favorites.items);
    const [scale, setScale] = useState(null)
    const [showNavbar, setShowNavbar] = useState(true);
    const lastScrollY = useRef(0);
    const timeoutRef = useRef(null);
    const [showProfile, setShowProfile] = useState(false);
    const dispatch = useDispatch()
    // const user = {
    //   isLoggedIn: false,
    //   name: "Yash Rathore",
    //   email: "yash@example.com",
    //   image: "/images/default.png",
    // };

    useEffect(() => {

        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            setScale(currentScrollY)

            // Scroll down → hide instantly
            if (currentScrollY > lastScrollY.current && currentScrollY > 50) {
                setShowNavbar(false);
                if (timeoutRef.current) clearTimeout(timeoutRef.current);
            }

            // Scroll up → show after delay
            if (currentScrollY < lastScrollY.current) {
                if (timeoutRef.current) clearTimeout(timeoutRef.current);
                timeoutRef.current = setTimeout(() => {
                    setShowNavbar(true);
                }, 30); // adjust delay here
            }

            lastScrollY.current = currentScrollY;
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
        };
    }, []); // No need to depend on lastScrollY since it's a ref now

    return (
        <nav
            className={`flex justify-between items-center fixed top-0 left-0 z-50 w-full px-12 py-1 sm:px-6 sm:py-3 md:px-12 md:py-2 bg-[#00000065] transition-transform duration-300 ${showNavbar ? "translate-y-0" : "-translate-y-full"
                }`}
        >
            <img
                src="/images/nav_logo.avif"
                alt="logo"
                className={`w-16 sm:w-20 md:w-24 lg:w-28 transition-opacity duration-300 ${scale < 10 ? "w-22 sm:w-26 md:w-30 lg:w-34" : ""}`}
            />
            <div className="flex gap-[1rem]">
                <div className="relative group inline-block text-white">
                    <Link to="/favorite">
                        <button className="text-2xl relative">
                            <FaRegHeart />
                            <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                                {data.length}
                            </span>
                        </button>
                    </Link>

                    <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-max bg-black text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        Favorites
                    </div>
                </div>


                <div className="relative group inline-block text-white">
                    <Link to="/addtocart"><button className="text-2xl "> <MdShoppingCart /></button></Link>
                    <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-max bg-black text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        See card
                    </div>
                </div>
                <div className="relative group inline-block text-white">
                    <button
                        className="text-2xl relative"
                        onClick={() => setShowProfile((prev) => !prev)}
                    >
                        <FaUserCircle />
                    </button>

                    {/* Dropdown */}
                    {showProfile && (
                        <div className="absolute right-0 mt-2 w-64 sm:w-56 bg-black border border-gray-700 rounded-lg shadow-lg p-4 z-50">
                            {user ? (
                                <div className="flex items-center gap-3">
                                    <img
                                        src={user.image}
                                        alt="Profile"
                                        className="w-10 h-10 rounded-full object-cover"
                                    />
                                    <div>
                                        <p className="text-sm font-semibold">{user.name}</p>
                                        <p className="text-xs text-gray-400">{user.email}</p>
                                    </div>
                                    <button onClick={() => dispatch(logout())}>
                                        logout
                                    </button>
                                </div>
                            ) : (
                                <div className="flex flex-col items-center text-center gap-3">
                                    <p className="text-sm text-gray-300">You're not logged in</p>
                                    <Link
                                        to="/login"
                                        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                                    >
                                        Login
                                    </Link>
                                </div>
                            )}
                        </div>
                    )}

                </div>

            </div>
        </nav>
    );
}
