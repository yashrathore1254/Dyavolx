import { useDispatch, useSelector } from 'react-redux';
import { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { toggleFavorite } from '../Redux/slice/favoritesSlice.jsx'
import { addToCart } from '../Redux/slice/cartSlice.jsx';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';

import { Link } from 'react-router-dom';
import { FaArrowRight } from "react-icons/fa6";
const Layout1 = ({ items }) => {
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const containerRef = useRef();

    useGSAP(() => {
        gsap.from(containerRef.current, {
            opacity: 0,
            y: 50,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 80%",
                toggleActions: "play none none reverse"
            }
        });
    }, []);

    const dispatch = useDispatch();
    const favorites = useSelector((state) => state.favorites.items);
    return (
        <div ref={containerRef} className="w-full px-[10px] relative fadein opacity-100">
            {/* Favorite Button */}
            <div className='absolute bottom-4 right-[30px] z-[2] flex items-center justify-center gap-[20px]'>
                <button className="cursor-pointer bg-white text-black p-1 rounded-[10px] active:scale-95 font-bold underline" onClick={() => dispatch(addToCart(items))} title='Add To Card'>Add To Cart</button>
                <button
                    onClick={() => dispatch(toggleFavorite(items.id))}

                    className="z-10 text-red-500 text-2xl active:scale-90"
                    title={favorites.includes(items.id) ? "Remove from Favorites" : "Add to Favorites"}
                >
                    {favorites.includes(items.id) ? <FaHeart /> : <FaRegHeart />}
                </button>

            </div>


            <div className="relative z-[2] w-full py-[20px] px-[10px]  bg-black mb-[10px]">
                <h1 className="text-white text-4xl transform scale-y-150 tracking-[-1px] font-extralight">
                    {items.title}
                </h1>
            </div>

            <div className="flex flex-col lg:flex-row gap-[10px]">
                {/* Left - 2 side-by-side images */}
                <div className="flex flex-col sm:flex-row flex-1 gap-[10px]">
                    {[0, 1].map((index) => (
                        <div
                            key={index}
                            className="relative group flex-1 h-[275px] md:h-[400px] lg:h-[500px] overflow-hidden"
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                        >
                            <img
                                src={items.images[index]}
                                alt={`img${index + 1}`}
                                className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                            />
                            <div className={`
                absolute inset-0 bg-[#00000086] flex items-center justify-center
                transition-all duration-300
                ${hoveredIndex === index ? 'opacity-100' : 'opacity-0'}
            `}>
                                <div className="text-white text-center scale-y-200 tracking-[-1.3px] font-thin flex flex-col items-center justify-center gap-1">
                                    <h2 className="text-xl  	">{items.title}</h2>
                                    <p className="text-lg font-light">₹{items.price}</p>
                                    <div className='text-white flex'>
                                        <Link to={`/singlecard/${items.id}`}>
                                            <div className='flex items-center justify-center gap-2 border-b-1'>
                                                <p className='text-xl'>View</p>
                                                <FaArrowRight />
                                            </div>
                                        </Link>
                                    </div>

                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Right - 2 stacked images */}
                <div className="flex flex-col gap-[10px] w-full lg:w-[23.68%]">
                    {[2, 3].map((index, i) => (
                        <div
                            key={index}
                            className={`relative group overflow-hidden ${i === 0
                                ? "h-[180px] sm:h-[210px] md:h-[250px] lg:h-[280px]"
                                : "h-[150px] sm:h-[180px] md:h-[200px] lg:h-[210px]"
                                }`}
                        >
                            <img
                                src={items.images[index]}
                                alt={`img${index + 1}`}
                                className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-[#00000086] bg-opacity-50 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                                <div className="text-white text-center scale-y-100 tracking-[-1.3px] font-thin">
                                    <h2 className="text-[20px] font-semibold">{items.title}</h2>
                                    <p className="text-[20px] font-light">₹{items.price}</p>

                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>

    );
};

export default Layout1;
