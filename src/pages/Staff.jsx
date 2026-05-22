import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const host = {
    name: "Kuro",
    image: "https://placehold.co/300x300/1a1a1a/ffffff?text=Host",
    twitter: "https://x.com/furfrou",
    blurb: "Placeholder — add a short bio or description for the host here.",
};

const categories = [
    {
        name: "Vocal Judges",
        members: [
            {
                name: "GIN",
                image: "https://placehold.co/300x300/1a1a1a/ffffff?text=Vocals+1",
                twitter: "https://x.com/graperamune",
                youtube: "https://www.youtube.com/embed/104NfwL5kQ4",
            },
            {
                name: "Un3h",
                image: "https://placehold.co/300x300/1a1a1a/ffffff?text=Vocals+2",
                twitter: "https://x.com/un3hcorn",
                youtube: "https://www.youtube.com/embed/duYkd5w9rCU",
            },
        ],
    },
    {
        name: "Mix Judges",
        members: [
            {
                name: "Niu Arx",
                image: "https://placehold.co/300x300/1a1a1a/ffffff?text=Mix+1",
                twitter: "https://x.com/niu_arx",
                youtube: "https://www.youtube.com/embed/dQw4w9WgXcQ",
            },
            {
                name: "KT",
                image: "https://placehold.co/300x300/1a1a1a/ffffff?text=Mix+2",
                twitter: "https://x.com/katieheehee",
                youtube: "https://www.youtube.com/embed/dQw4w9WgXcQ",
            },
        ],
    },
    {
        name: "Art Judges",
        members: [
            {
                name: "Ena",
                image: "https://placehold.co/300x300/1a1a1a/ffffff?text=Art+1",
                twitter: "https://x.com/_EnaMeii",
                youtube: "https://www.youtube.com/embed/dQw4w9WgXcQ",
            },
            {
                name: "Judge Name",
                image: "https://placehold.co/300x300/1a1a1a/ffffff?text=Art+2",
                twitter: "https://twitter.com/username",
                youtube: "https://www.youtube.com/embed/dQw4w9WgXcQ",
            },
        ],
    },
    {
        name: "Animation Judges",
        members: [
            {
                name: "Kuro",
                image: "https://x.com/furfrou/photo",
                twitter: "https://x.com/furfrou",
                youtube: "https://www.youtube.com/embed/6tO0O5Ww-ME",
            },
            {
                name: "Mika",
                image: "https://x.com/hongmika_/photo",
                twitter: "https://x.com/hongmika_",
                youtube: "https://www.youtube.com/embed/6yV5lMFoOEs",
            },
        ],
    },
];

function StaffCard({ member }) {
    return (
        <div className="bg-white/5 rounded-2xl overflow-hidden flex flex-col">
            <img
                src={member.image}
                alt={member.name}
                className="w-full aspect-square object-cover"
            />
            <div className="p-5 flex flex-col gap-3 flex-1">
                <h3 className="text-4xl text-white font-arose">
                    {member.name}
                </h3>
                <a
                    href={member.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sky-400 hover:text-sky-300 transition-colors text-sm font-medium w-fit"
                >
                    <svg
                        className="w-4 h-4"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden="true"
                    >
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.259 5.63L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                    Twitter / X
                </a>
                <div className="mt-1 rounded-xl overflow-hidden aspect-video">
                    <iframe
                        src={member.youtube}
                        title={`${member.name} YouTube`}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="w-full h-full"
                    />
                </div>
            </div>
        </div>
    );
}

export default function Staff() {
    const sectionsRef = useRef([]);

    useEffect(() => {
        sectionsRef.current.forEach((el) => {
            if (!el) return;
            gsap.fromTo(
                el,
                { y: 50, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: el,
                        start: "top 85%",
                        toggleActions: "play none none none",
                    },
                },
            );
        });

        return () => ScrollTrigger.getAll().forEach((t) => t.kill());
    }, []);

    return (
        <main className="max-w-6xl mx-auto px-6 py-16">
            <div className="text-center mb-12">
                <h1 className="text-6xl font-arose font-bold text-white mb-3">
                    Judges
                </h1>
                <p className="text-white/70 text-lg max-w-2xl mx-auto font-arose">
                    More coming soon...
                </p>
            </div>
        </main>
    );
}
