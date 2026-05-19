import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function Footer() {
    const iconsRef = useRef([]);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: iconsRef.current[0],
                    start: "top bottom",
                    toggleActions: "play none none none",
                },
            });

            tl.fromTo(
                iconsRef.current[0],
                { opacity: 0, y: 20 },
                { opacity: 1, y: 0, duration: 0.5, ease: "power3.out" },
            ).fromTo(
                iconsRef.current[1],
                { opacity: 0, y: 20 },
                { opacity: 1, y: 0, duration: 0.5, ease: "power3.out" },
            );
        });

        return () => ctx.revert();
    }, []);

    return (
        <footer className="w-full py-8 flex justify-center items-center gap-6">
            <a
                ref={(el) => (iconsRef.current[0] = el)}
                href="https://www.youtube.com/@ReplayCB"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="text-white/60 hover:text-white transition-colors duration-200"
                style={{ opacity: 0 }}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-7 h-7"
                >
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
            </a>
            <a
                ref={(el) => (iconsRef.current[1] = el)}
                href="https://x.com/replaycb"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X (Twitter)"
                className="text-white/60 hover:text-white transition-colors duration-200"
                style={{ opacity: 0 }}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6"
                >
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
            </a>
        </footer>
    );
}
