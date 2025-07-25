import { Outlet, useNavigationType } from "react-router-dom";
import { useEffect } from "react";


const RootLayout = () => {
    const navigationType = useNavigationType();

    useEffect(() => {
        if ('scrollRestoration' in window.history) {
            window.history.scrollRestoration = 'manual';
        }

        if (navigationType === "POP") {
            const scrollY = sessionStorage.getItem("scroll-position") || 0;
            window.scrollTo(0, parseInt(scrollY));
        } else {
            window.scrollTo(0, 0);
        }

        return () => {
            sessionStorage.setItem("scroll-position", window.scrollY.toString());
        };
    }, [navigationType]);

    return (
        <>

            <Outlet />

        </>
    );
};

export default RootLayout;
