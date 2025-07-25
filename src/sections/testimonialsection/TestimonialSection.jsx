import { useRef } from "react";
import React from 'react';
import { useGSAP } from "@gsap/react";
import { cards } from "../../Utils";
import gsap from "gsap";
const TestimonialSection = () => {
    const vdRef = useRef([]);

    useGSAP(() => {
        gsap.set(".testimonials-section", {
        });

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".testimonials-section",
                start: "top bottom",
                end: "200% top",
                scrub: true,

            },
        });

        tl.to(".testimonials-section .first-title", {
            xPercent: 70,
        })
            .to(
                ".testimonials-section .sec-title",
                {
                    xPercent: 25,
                },
                "<"
            )
            .to(
                ".testimonials-section .third-title",
                {
                    xPercent: 50,
                },
                "<"
            );

        const pinTl = gsap.timeline({
            scrollTrigger: {
                trigger: ".testimonials-section",
                start: "10% top",
                end: "300% top",
                scrub: 1.5,
                pin: true,

            },
        });

        pinTl.from(".vd-card", {
            yPercent: 180,
            stagger: 0.2,
            ease: "power1.inOut",
        });
    });

    const handlePlay = (index) => {
        const video = vdRef.current[index];
        video.play();
    };

    const handlePause = (index) => {
        const video = vdRef.current[index];
        video.pause();
    };
    return (
        <div className='testimonials-section'>
            <div className="absolute size-full flex flex-col items-start pt-[3vw] text-black">
                <h1 className="first-title ">When</h1>
                <h1 className="sec-title">art meets</h1>
                <h1 className=" third-title"> anarchy</h1>
            </div>

            <div className="pin-box">
                {cards.map((card, index) => (
                    <div
                        key={index}
                        className={`vd-card ${card.translation} ${card.rotation}`}
                        onMouseEnter={() => handlePlay(index)}
                        onMouseLeave={() => handlePause(index)}
                    >

                        <video
                            ref={(el) => (vdRef.current[index] = el)}
                            src={card.src}
                            playsInline
                            muted
                            loop
                            className="size-full object-cover"
                        />
                    </div>
                ))}
            </div>

            <div className="bottom absolute -top-3.5 left-0 right-0 w-full z-1">
                <img src="/images/bottom.png" alt="" className="w-[100%] h-[100%] object-cover" />
            </div>
        </div>
    )
}

export default TestimonialSection