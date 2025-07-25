
import { useDispatch, useSelector } from 'react-redux';
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { toggleFavorite } from '../Redux/slice/favoritesSlice.jsx'
import { addToCart } from '../Redux/slice/cartSlice.jsx';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from "react-icons/fa6";


const Layout2 = ({ items }) => {
    const [showOverlay, setShowOverlay] = useState(false)
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
                start: "top 70%",
                toggleActions: "play none none reverse"
            }
        });
    }, []);
    const dispatch = useDispatch();
    const favorites = useSelector((state) => state.favorites.items);

    const handleMobileOverlayToggle = () => {

        if (window.innerWidth < 768) {
            setShowOverlay(!showOverlay);
        }
    };

    return (
        <div className="p-[10px] w-full relative" ref={containerRef}>
            {/* Top Buttons */}
            <div className='absolute bottom-8 right-[30px] z-[2] flex items-center justify-center gap-[20px]'>
                <button
                    className="cursor-pointer bg-white text-black p-1 rounded-[10px] active:scale-95"
                    onClick={() => dispatch(addToCart(items))}
                    title='Add To Cart'
                >
                    Add To Cart
                </button>
                <button
                    onClick={() => dispatch(toggleFavorite(items.id))}
                    className="z-10 text-red-500 text-2xl active:scale-90"
                    title={favorites.includes(items.id) ? "Remove from Favorites" : "Add to Favorites"}
                >
                    {favorites.includes(items.id) ? <FaHeart /> : <FaRegHeart />}
                </button>
            </div>

            {/* Title */}
            <div className="relative z-[2] w-full py-[20px] px-[10px] bg-black mb-[10px]">
                <h1 className="text-white text-4xl transform scale-y-150 tracking-[-1px] font-extralight">
                    {items.title}
                </h1>
            </div>

            {/* Columns */}
            <div className="flex flex-col lg:flex-row gap-[10px]">
                {/* Left Column */}
                <div className="w-full lg:w-[37.7%] flex flex-col gap-[10px]">
                    {[0, 1].map((index) => (
                        <div
                            key={index}
                            className="relative group h-[180px] sm:h-[210px] md:h-[250px] lg:h-[250px] overflow-hidden"
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                        >
                            <img
                                src={items.images[index]}
                                alt={`img${index + 2}`}
                                className="w-full h-full object-cover object-top"
                            />

                            <div
                                className={`
                absolute inset-0 bg-[#00000086] flex items-center justify-center
                transition-all duration-300
                ${hoveredIndex === index ? 'opacity-100' : 'opacity-0'}
            `}
                            >
                                <div className="text-white text-center scale-y-200 tracking-[-1.3px] font-thin">
                                    <h2 className="text-xl font-semibold">{items.title}</h2>
                                    <p className="text-lg font-light">₹{items.price}</p>
                                    <div className='text-white'>
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

                {/* Right Column */}
                <div
                    className="relative group w-full lg:w-[62.3%] h-[350px] md:h-[500px] lg:h-[510px] overflow-hidden"
                    onMouseEnter={() => setHoveredIndex(2)}
                    onMouseLeave={() => setHoveredIndex(null)}
                >
                    <img
                        src={items.images[2]}
                        alt="img1"
                        className="w-full h-full object-cover object-center"
                    />

                    <div
                        className={`
            absolute inset-0 bg-[#00000086] bg-opacity-50 flex items-center justify-center
            transition-all duration-300
            ${hoveredIndex === 2 ? 'opacity-100' : 'opacity-0'}
        `}
                    >
                        <div className="text-white text-center scale-y-200 tracking-[-1.3px] font-thin">
                            <h2 className="text-2xl font-semibold">{items.title}</h2>
                            <p className="text-lg font-light">₹{items.price}</p>
                            <div className='text-white'>
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
            </div>
        </div>

    );
};

export default Layout2;
