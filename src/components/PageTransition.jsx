import gsap from "gsap";
import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

export default function PageTransition({ children }) {
    const el = useRef(null);
    const { pathname } = useLocation();

    useEffect(() => {
        if (window.lenis) {
            window.lenis.scrollTo(0, { immediate: true });
        } else {
            window.scrollTo(0, 0);
        }
        gsap.fromTo(
            el.current,
            { opacity: 0 },
            { opacity: 1, duration: 0.5, ease: "power2.out" },
        );
    }, [pathname]);

    return <div ref={el}>{children}</div>;
}
