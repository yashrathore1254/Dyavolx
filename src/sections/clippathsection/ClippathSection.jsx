import { useGSAP } from "@gsap/react";
import ClipPathTitle from "../../component/ClipPathTitle";
import gsap from "gsap";
import { BentoTilt, Button } from "../../component/Features";


const ClippathSection = () => {
    useGSAP(() => {
        const revealTl = gsap.timeline({
            delay: 1,
            scrollTrigger: {
                trigger: ".benefit-section",
                start: "top 60%",
                end: "top top",
                scrub: 1.5,
            },
        });

        revealTl
            .to(".benefit-section .first-title", {
                duration: 1,
                opacity: 1,
                clipPath: "polygon(0% 0%, 100% 0, 100% 100%, 0% 100%)",
                ease: "circ.out",
            })
            .to(".benefit-section .second-title", {
                duration: 1,
                opacity: 1,
                clipPath: "polygon(0% 0%, 100% 0, 100% 100%, 0% 100%)",
                ease: "circ.out",
            })
            .to(".benefit-section .third-title", {
                duration: 1,
                opacity: 1,
                clipPath: "polygon(0% 0%, 100% 0, 100% 100%, 0% 100%)",
                ease: "circ.out",
            })
            .to(".benefit-section .fourth-title", {
                duration: 1,
                opacity: 1,
                clipPath: "polygon(0% 0%, 100% 0, 100% 100%, 0% 100%)",
                ease: "circ.out",
            });
    });

    return (
        <section className="benefit-section relative">
            <div className="container mx-auto pt-5">
                <div className="col-center">
                    <BentoTilt>
                        <div className="mt-20 col-center">
                            <ClipPathTitle
                                title={"THE DARK SIDE OF STYLE."}
                                color={"#faeade"}
                                bg={"#D51E1E"}
                                className={"first-title"}
                                borderColor={"#222123"}
                            />
                            <ClipPathTitle
                                title={"SHOP THE DARK"}
                                color={"#222123"}
                                bg={"white"}
                                className={"second-title"}
                                borderColor={"#222123"}
                            />
                            <ClipPathTitle
                                title={"THE CULT OF X BEGINS HERE"}
                                color={"#faeade"}
                                bg={"#D51E1E"}
                                className={"third-title"}
                                borderColor={"#222123"}
                            />
                            <ClipPathTitle
                                title={"REWRITE YOUR STORY IN BLACK"}
                                color={"#2E2D2F"}
                                bg={"white"}
                                className={"fourth-title"}
                                borderColor={"#222123"}
                            />
                        </div>
                    </BentoTilt>

                </div>
            </div>
        </section>
    );
};

export default ClippathSection;
