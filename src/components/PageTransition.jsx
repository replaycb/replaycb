import gsap from "gsap";
import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

export default function PageTransition({ children }) {
    const el = useRef(null);
    const { pathname } = useLocation();

    useEffect(() => {
        gsap.fromTo(
            el.current,
            { opacity: 0 },
            { opacity: 1, duration: 0.5, ease: "power2.out" },
        );
    }, [pathname]);

    return <div ref={el}>{children}</div>;
}
