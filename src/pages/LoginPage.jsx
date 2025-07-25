import React, { useState } from 'react'
import { CiLogin } from "react-icons/ci";
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { login } from "../Redux/slice/userSlice.jsx";
import { Navigate } from 'react-router-dom';
const LoginPage = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const error = useSelector((state) => state.user.error);
    const success = useSelector((state) => state.user.success)
    const [formData, setFormData] = useState({ email: "", password: "" });
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(login(formData))
    };
    if (success) {
        navigate('/')
    }
    return (
        <div className="min-h-screen bg-[url(/images/mobile-backbg.webp)] sm:bg-[url(/images/backbg.webp)] bg-cover bg-center text-white flex items-center justify-center px-4 py-10">
            <div className="max-w-2xl w-full">
                <div className="w-full flex items-center justify-center mb-[2rem]">
                    <div className="w-[10rem]">
                        <img src="/images/nav_logo.avif" alt="logo" />
                    </div>
                </div>
                <h1 className='text-3xl mb-4 flex items-center'>Login <CiLogin size={"1.5rem"} /></h1>
                <form className="grid grid-cols-1 sm:grid-cols-2 gap-6" onSubmit={handleSubmit}>
                    {/* Email */}
                    {error && <p className="text-red-500">{error}</p>}
                    {success && <p className="text-green-700">{success}</p>}

                    <div className="sm:col-span-2">
                        <label className="block text-sm text-gray-400 mb-1">EMAIL*</label>
                        <input
                            type="email"
                            className="w-full bg-transparent border-b border-white py-2 outline-none"
                            placeholder="your@email.com"
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        />
                    </div>

                    {/* Password */}
                    <div className="sm:col-span-2">
                        <label className="block text-sm text-gray-400 mb-1">PASSWORD*</label>
                        <input
                            type="password"
                            className="w-full bg-transparent border-b border-white py-2 outline-none"
                            placeholder="********"
                            onChange={(e) => setFormData({ ...formData, password: e.target.value })}

                        />
                    </div>


                    <div className="sm:col-span-2">
                        <button
                            type="submit"
                            className="w-full bg-white text-black font-semibold py-2 rounded-md hover:bg-gray-300 transition duration-300"
                        >
                            Submit
                        </button>
                    </div>

                    <div className="sm:col-span-2">
                        <button
                            type="button"
                            className="w-full border border-white text-white font-semibold py-2 rounded-md hover:bg-white hover:text-black transition duration-300 flex items-center justify-center gap-2"
                        >

                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg"
                                alt="Google"
                                className="w-5 h-5"
                            />
                            Continue with Google
                        </button>
                        <p className="mt-2 text-md text-gray-300">
                            Don't have an account?{" "}
                            <Link to="/register" className="text-blue-500 hover:underline">
                                Register
                            </Link>
                            {" "}first.
                        </p>
                    </div>
                </form>
            </div>
        </div>

    )
}

export default LoginPage