import React, { useState } from "react";
import { CiLogin } from "react-icons/ci";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../Redux/slice/userSlice.jsx";
const RegisterPage = () => {
    const dispatch = useDispatch();
    const error = useSelector((state) => state.user.error);
    const [formData, setFormData] = useState({ name: "", email: "", password: "", phone: "", country: "" });

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(register(formData))
    }
    return (
        <div className="min-h-screen bg-[url(/images/mobile-backbg.webp)]  sm:bg-[url(/images/backbg.webp)] bg-cover bg-center text-white flex items-center justify-center px-4 py-10">
            <div className="max-w-2xl w-full">
                <div className="w-full flex items-center justify-center mb-[1rem]">
                    <div className="w-[9rem]">
                        <img src="/images/nav_logo.avif" alt="logo" />
                    </div>
                </div>
                <h1 className='text-3xl mb-4 flex items-center'>Register <CiLogin size={"1.5rem"} /></h1>

                <form className="grid grid-cols-1 sm:grid-cols-2 gap-6" onSubmit={handleSubmit}>

                    <div>
                        <label className="block text-sm text-gray-400 mb-1">NAME*</label>
                        <input
                            name="name"
                            type="text"
                            className="w-full bg-transparent border-b border-white py-2 outline-none"
                            placeholder="Your name"
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        />
                    </div>


                    <div>
                        <label className="block text-sm text-gray-400 mb-1">EMAIL*</label>
                        <input
                            name="email"
                            type="email"
                            className="w-full bg-transparent border-b border-white py-2 outline-none"
                            placeholder="your@email.com"
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        />
                    </div>


                    <div>
                        <label className="block text-sm text-gray-400 mb-1">PASSWORD*</label>
                        <input
                            name="password"
                            type="password"
                            className="w-full bg-transparent border-b border-white py-2 outline-none"
                            placeholder="********"
                            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                        />
                    </div>


                    <div>
                        <label className="block text-sm text-gray-400 mb-1">PHONE*</label>
                        <div className="flex items-center gap-2 border-b border-white py-2">
                            <span className="flex items-center gap-1">
                                <img src="https://flagcdn.com/in.svg" alt="India" className="w-5 h-4" />
                                <span>+91</span>
                            </span>
                            <input
                                name="phone"
                                type="tel"
                                className="bg-transparent outline-none w-full pl-2"
                                placeholder="Phone number"
                                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            />
                        </div>
                    </div>


                    <div className="sm:col-span-1">
                        <label className="block text-sm text-gray-400 mb-1">COUNTRY*</label>
                        <select className="w-full bg-transparent border-b border-white py-2 outline-none text-gray-400" onChange={(e) => setFormData({ ...formData, country: e.target.value })}>
                            <option value="">Select Country</option>
                            <option value="IN">India</option>
                            <option value="US">United States</option>
                            <option value="UK">United Kingdom</option>
                            <option value="AU">Australia</option>
                        </select>
                    </div>


                    <div className="sm:col-span-2">
                        <button
                            type="submit"
                            className="w-full bg-white text-black font-semibold py-1  rounded-md hover:bg-gray-300 transition duration-300"
                        >
                            Submit
                        </button>
                        <p className="mt-2 text-md text-gray-300">
                            Already registered?{" "}
                            <Link to="/login" className="text-blue-500 hover:underline">
                                Login
                            </Link>
                        </p>
                    </div>
                </form>
            </div>
        </div>

    );
};

export default RegisterPage;
