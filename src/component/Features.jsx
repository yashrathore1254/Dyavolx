
import { useState, useRef, Children } from 'react';
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
export const Button = ({ children }) => {
    const hoverButtonRef = useRef(null);
    const glowRef = useRef(null);
    const glowPosition = useRef({ x: 0, y: 0 });

    const handleMouseMove = (e) => {
        const rect = hoverButtonRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        glowPosition.current = { x, y };

        gsap.to(glowRef.current, {
            background: `radial-gradient(100px circle at ${x}px ${y}px, red, black)`,
            duration: 0.3,
            ease: "power2.out",
        });
    };

    const handleMouseEnter = () => {
        gsap.to(glowRef.current, {
            opacity: 1,
            duration: 0.4,
            ease: "power2.out",
        });
    };

    const handleMouseLeave = () => {
        gsap.to(glowRef.current, {
            opacity: 0,
            duration: 0.5,
            ease: "power3.out",
        });
    };

    return (
        <div
            ref={hoverButtonRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="relative flex w-fit cursor-pointer items-center gap-1 overflow-hidden rounded-full bg-black px-7 py-3 text-xs uppercase text-white border border-gray-400"
        >
            <div
                ref={glowRef}
                className="pointer-events-none absolute -inset-px z-10"
                style={{
                    opacity: 0,
                    transition: "opacity 0.4s ease-out",
                    background: "radial-gradient(100px circle at center, red, black)",
                }}
            />
            <p className=" z-20">{children}</p>
        </div>
    );
};





export const BentoTilt = ({ children, className = "" }) => {
    const itemRef = useRef(null);

    const handleMouseMove = (event) => {
        const item = itemRef.current;
        if (!item) return;

        const { left, top, width, height } = item.getBoundingClientRect();
        const relativeX = (event.clientX - left) / width;
        const relativeY = (event.clientY - top) / height;

        const tiltX = (relativeY - 0.5) * 6; // More tilt
        const tiltY = (relativeX - 0.5) * -6;

        gsap.to(item, {
            transform: `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(0.96, 0.96, 0.96)`,
            ease: "power2.out",
            duration: 0.4,
        });
    };

    const handleMouseLeave = () => {
        const item = itemRef.current;
        if (!item) return;

        gsap.to(item, {
            transform: "perspective(700px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)",
            ease: "power3.out",
            duration: 0.6,
        });
    };

    return (
        <div
            ref={itemRef}
            className={className}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ willChange: "transform" }}
        >
            {children}
        </div>
    );
};


export const Card = ({ src, title = "", description = "", ishover = true }) => {
    return (
        <div className="card-container relative size-full h-[100%] w-[100%]">
            <img src={src} alt="" className='card-container-img absolute inset-0 w-full h-full object-cover object-center' />
            <div className="relative z-10 flex size-full flex-col justify-between p-5 text-blue-50 ">
                <div>
                    <h1 className="bento-title special-font">{title}</h1>
                    {description && (
                        <p className="mt-3 max-w-64 text-xs md:text-base">{description}</p>
                    )}

                </div>
                {/* {
                    ishover && <div className='show-text w-full h-full bg-[#000000d6] absolute top-0 left-0'>

                    </div>
                } */}

            </div>
        </div>
    );
};





