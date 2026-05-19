import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const faqs = [
    {
        q: "Do promo rounds count as a pool for teams to choose songs from (e.g., Round 0)?",
        a: "No, only official CB rounds will be considered for the song pool (Rounds 1-4).",
    },
    {
        q: "I was able to find a Chorus Battle/playlist link not listed in the CB directory on your website.",
        a: "Feel free to DM our official Twitter and we will make the updates! Thank you for your help.",
    },
    {
        q: "Do HoyoVerse, VocaDuo, or Smule competitions count?",
        a: "No - RE:CB will be focused on Youtaite (community, Youtube-based) cover competitions only.",
    },
    {
        q: "Can I register for this CB with the same team I was a part of in a previous chorus battle? Would we be able to do remakes of our past chorus battle entries?",
        a: "Yes - we highly encourage this! Teams may cover songs they have covered in the past, and if all members from the original entry consent to it / are involved in the remake, we believe this would be a fun way to showcase progress over the years!",
    },
    {
        q: "There's a chorus battle entry with a song that our team wants to cover in RE:CB. However, the entry is unlisted / has removed the CB tag from the video title. Can we still choose this entry?",
        a: "As long as participants can prove that the video was originally a chorus battle entry, it is permitted. While unlisted videos are OK, private videos are not. All participants should be able to view the original entry.",
    },
    {
        q: "Do I have to ask the previous Chorus Battle Team for permission?",
        a: "The purpose of this chorus battle is to help participants find song inspiration from previous chorus battles. As long as the only element from the chorus battle entry your team is paying tribute to is the song itself, participants will not have to ask for permission, as multiple parties can cover the same song.",
        exceptions: [
            "If the song your team would like to cover is another team's original song, you may have to ask permission to cover their song or use their instrumental.",
            "Heavy referencing / plagiarism of other chorus battle entries is not permitted in this chorus battle. Please refer to the rules section of our website to read more about our guidelines.",
        ],
    },
    {
        q: "Can our group do a promo entry?",
        a: "Yes - these entries will not be judged and will not count for any additional points. Due to this, groups will have no limitation on song choice for pre-round covers, though we encourage teams to follow the theme regardless!",
    },
];

export default function FAQ() {
    const listRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const items = listRef.current?.querySelectorAll("li");
            if (!items) return;
            gsap.fromTo(
                items,
                { opacity: 0, y: 30 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    ease: "power3.out",
                    stagger: 0.15,
                    scrollTrigger: {
                        trigger: listRef.current,
                        start: "top 85%",
                        toggleActions: "play none none none",
                    },
                },
            );
        });
        return () => ctx.revert();
    }, []);

    return (
        <main className="max-w-4xl mx-auto px-6 py-16">
            <div className="text-center mb-12">
                <h1 className="text-6xl font-arose font-bold text-white mb-3">
                    FAQ
                </h1>
            </div>

            <ul ref={listRef} className="flex flex-col gap-8">
                {faqs.map(({ q, a, exceptions }, i) => (
                    <li key={i} className="border-b border-white/10 pb-8">
                        <p className="text-white font-arose font-semibold text-lg mb-2">
                            {q}
                        </p>
                        <p className="text-white/70 leading-relaxed">{a}</p>
                        {exceptions && (
                            <ul className="mt-3 flex flex-col gap-2">
                                {exceptions.map((exc, j) => (
                                    <li
                                        key={j}
                                        className="pl-4 border-l-2 border-main-100/50 text-white/50 leading-relaxed text-sm italic"
                                    >
                                        <span className="not-italic font-semibold text-white/60 font-arose">
                                            Exception:{" "}
                                        </span>
                                        {exc}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </li>
                ))}
            </ul>
        </main>
    );
}
