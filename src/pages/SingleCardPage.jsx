import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Navigation } from "swiper/modules";
import "swiper/css";
import { useParams } from "react-router-dom";
import { Productsdata } from "../Utils";
import 'swiper/css/navigation';
export default function SingleCardPage() {
    const [fullscreenImage, setFullscreenImage] = useState(null);

    const { id } = useParams()
    const data = Productsdata.find((d) => d.id === id)

    const swiperRef = useRef(null);
    const [swiperCompleted, setSwiperCompleted] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        const handleScroll = (e) => {
            if (!isMobile && !swiperCompleted) {
                e.preventDefault();
                e.stopPropagation();
                return false;
            }
        };

        window.addEventListener("wheel", handleScroll, { passive: false });
        return () => window.removeEventListener("wheel", handleScroll);
    }, [swiperCompleted, isMobile]);

    return (
        <div className="w-full mt-[5rem] min-h-screen flex flex-col  md:flex-row md:mt-[5rem]">
            <div className="flex flex-col-reverse md:flex-row md:w-[70%]">
                <div className="w-full md:w-1/2 bg-black text-white p-6 flex flex-col justify-center items-start gap-4">
                    <h2 className="text-2xl font-semibold">{data.title}</h2>
                    <p className="text-sm">LIMITED RELEASE</p>
                    <p className="text-sm">Each jacket is personally signed by Shah Rukh Khan and has a unique serial number.</p>
                    <p className="text-sm">Suede jacket featuring premium zippers, subtle stitching, and functional pockets.</p>
                    <p className="text-sm">Artisanal suede dyeing for luxurious look & feel.</p>
                    <p className="text-sm font-bold">Price :- {data.price}</p>

                    <button className="mt-4 bg-white text-black px-6 py-2 rounded">Buy Now</button>
                </div>

                {/* Center Swiper */}
                <div className="w-full h-[30rem] md:w-1/2 md:h-screen">
                    <Swiper
                        navigation={true}

                        ref={swiperRef}
                        direction={isMobile ? "horizontal" : "vertical"}
                        mousewheel={!isMobile}
                        modules={[Mousewheel, Navigation]}
                        slidesPerView={1}
                        onReachEnd={() => setSwiperCompleted(true)}
                        onSlideChange={(swiper) => {
                            if (swiper.activeIndex !== swiper.slides.length - 1) {
                                setSwiperCompleted(false);
                            }
                        }}
                        className="w-full h-full"
                    >
                        {
                            data.images.map((i, index) => (
                                <>
                                    <SwiperSlide key={index}>
                                        <div className="w-full h-full flex justify-center items-center bg-[#111] hover:cursor-zoom-in">
                                            <img src={i} alt="Model 1" className=" object-cover w-full h-full " onClick={() => setFullscreenImage(i)} />

                                            {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, molestias provident quibusdam cupiditate eius officiis, impedit fugiat modi ad temporibus animi. Cumque iusto quasi, commodi voluptatem minus quas eligendi accusamus!</p> */}
                                        </div>
                                    </SwiperSlide>
                                </>
                            ))
                        }

                    </Swiper>
                </div>
            </div>
            <div className="w-full md:w-[30%] bg-black text-white p-6 flex flex-col justify-center items-start gap-4">
                <h3 className="text-lg font-bold">FIT & CARE</h3>
                <ul className="text-sm list-disc pl-4">
                    <li>Dry clean only</li>
                    <li>Do not iron on embellishment</li>
                </ul>
                <h3 className="text-lg font-bold mt-4">SHIPPING & RETURNS</h3>
                <p className="text-sm">Standard shipping available worldwide. Returns accepted within 7 days.</p>
            </div>

            {fullscreenImage && (
                <div className="fixed top-0 left-0 w-full h-screen bg-black bg-opacity-90 flex items-center justify-center z-50  hover:cursor-zoom-out" onClick={() => setFullscreenImage(null)}>
                    <button
                        onClick={() => setFullscreenImage(null)}
                        className="absolute top-4 right-6 text-white text-4xl font-bold cursor-pointer"
                    >
                        &times;
                    </button>
                    <img
                        src={fullscreenImage}
                        alt="Zoom"
                        className="max-w-full max-h-full object-cover object-center"
                    />
                </div>
            )}



        </div>
    );
}
