import { BentoTilt } from "./Features";


const ClipPathTitle = ({ title, color, bg, className, borderColor }) => {
    return (
        <div className="general-title ">
            <div
                style={{
                    clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)",
                    borderColor: borderColor,
                }}
                className={`${className} border-[.5vw] text-nowrap opacity-0`}
            >
                <div
                    className="md:px-16 px-3 md:pt-0 pt-4"
                    style={{
                        backgroundColor: bg,
                    }}
                >
                    <h2
                        style={{
                            color: color,
                        }}
                    >
                        {title}
                    </h2>
                </div>
            </div>
        </div>

    );
};

export default ClipPathTitle;
