import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function Rules() {
    const section1Ref = useRef(null);
    const section2Ref = useRef(null);
    const section3Ref = useRef(null);

    useEffect(() => {
        const sections = [
            { el: section1Ref.current, x: -80 },
            { el: section2Ref.current, x: 80 },
            { el: section3Ref.current, x: -80 },
        ];

        sections.forEach(({ el, x }) => {
            if (!el) return;
            const h3 = el.querySelector("h3");
            const ol = el.querySelector("ol");
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: el,
                    start: "top 85%",
                    toggleActions: "play none none none",
                },
            });
            tl.fromTo(
                h3,
                { x, opacity: 0 },
                { x: 0, opacity: 1, duration: 2, ease: "power3.out" },
            ).fromTo(
                ol,
                { x, opacity: 0 },
                { x: 0, opacity: 1, duration: 2, ease: "power3.out" },
                "-=1.5",
            );
        });

        return () => ScrollTrigger.getAll().forEach((t) => t.kill());
    }, []);

    return (
        <main className="max-w-6xl mx-auto px-6 py-16">
            <div className="text-center mb-12">
                <h1 className="text-6xl font-arose font-bold text-white mb-3">
                    Rules
                </h1>
            </div>

            <section ref={section1Ref}>
                <h3 className="text-5xl font-arose text-white mb-2">
                    Section 1:{" "}
                    <span className="text-main-100">Team Information</span>
                </h3>
                <ol type="1" className="list-decimal list-outside pl-6 mb-8">
                    <li className="text-white text-lg mb-5 font-semibold">
                        Team Size
                        <p className="font-normal text-white/80 mt-1 leading-relaxed">
                            Teams must consist of 3–8 vocalists.
                            <br />
                            Teams may also include up to 6 staff-only members.
                        </p>
                    </li>
                    <li className="text-white text-lg mb-5 font-semibold">
                        Registration Requirements
                        <p className="font-normal text-white/80 mt-1 leading-relaxed">
                            Teams must be fully formed by the time of
                            registration. <br />
                            Each team must designate:
                            <ul
                                type="disc"
                                className="list-disc list-outside pl-5 my-2"
                            >
                                <li>1 Team Leader</li>
                                <li>1 Co-Leader</li>
                            </ul>
                            Leaders will be responsible for all official
                            communication.
                        </p>
                    </li>
                    <li className="text-white text-lg mb-5 font-semibold">
                        Registration Cap
                        <p className="font-normal text-white/80 mt-1 leading-relaxed">
                            There is no limit to the number of teams that may
                            register.
                        </p>
                    </li>
                </ol>
            </section>

            <section ref={section2Ref} className="text-right">
                <h3 className="text-5xl font-arose text-white mb-2">
                    Section 2:{" "}
                    <span className="text-main-100">
                        Submission Information
                    </span>
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2">
                    <div></div>
                    <div>
                        <ol
                            type="1"
                            className="list-decimal list-outside pl-6 mb-8 text-left ml-auto w-fit"
                        >
                            <li className="text-white text-lg mb-5 font-semibold">
                                Competition Theme
                                <p className="font-normal text-white/80 mt-1 leading-relaxed">
                                    Replay Chorus Battle is a chorus battle
                                    cover competition for songs that have been
                                    entered in at least one previous chorus
                                    battle.
                                </p>
                            </li>
                            <li className="text-white text-lg mb-5 font-semibold">
                                Original Songs
                                <p className="font-normal text-white/80 mt-1 leading-relaxed">
                                    Original songs are not permitted, as they do
                                    not fit the event theme.
                                </p>
                            </li>
                            <li className="text-white text-lg mb-5 font-semibold">
                                Round Themes
                                <p className="font-normal text-white/80 mt-1 leading-relaxed">
                                    A new theme or prompt will be released at
                                    the beginning of each round.
                                </p>
                            </li>
                            <li className="text-white text-lg mb-5 font-semibold">
                                Allowed Edits & Song Types
                                <p className="font-normal text-white/80 mt-1 leading-relaxed">
                                    Instrumental remakes, remixes, and alternate
                                    edits are allowed.
                                    <br />
                                    Original songs are not permitted, as they do
                                    not fit the event theme.
                                </p>
                            </li>
                            <li className="text-white text-lg mb-5 font-semibold">
                                Song Length
                                <p className="font-normal text-white/80 mt-1 leading-relaxed">
                                    Entries must be at least 2 minutes and 30
                                    seconds long.
                                    <br />
                                    There is no maximum length requirement.
                                </p>
                            </li>
                            <li className="text-white text-lg mb-5 font-semibold">
                                Language & Genre
                                <p className="font-normal text-white/80 mt-1 leading-relaxed">
                                    Replay Chorus Battle is a chorus battle
                                    cover competition for songs that have been
                                    entered in at least one previous chorus
                                    battle.
                                </p>
                            </li>
                            <li className="text-white text-lg mb-5 font-semibold">
                                Upload Requirements
                                <p className="font-normal text-white/80 mt-1 leading-relaxed">
                                    Entries must be publicly available on
                                    YouTube at the time of submission.
                                    <br />
                                    Unlisted uploads will not be accepted.
                                </p>
                            </li>
                            <li className="text-white text-lg mb-5 font-semibold">
                                Deadlines & Grace Period
                                <p className="font-normal text-white/80 mt-1 leading-relaxed">
                                    Each round deadline will be at 11:59 PM
                                    Central Time on the listed due date.
                                    <br />A 24-hour grace period will follow
                                    each deadline.
                                </p>
                            </li>
                            <li className="text-white text-lg mb-5 font-semibold">
                                Video Title Format
                                <p className="font-normal text-white/80 mt-1 leading-relaxed">
                                    YouTube uploads must follow this format:{" "}
                                    <br />
                                    【RE:CB-R#】Song Name【Team Name】
                                </p>
                            </li>
                            <li className="text-white text-lg mb-5 font-semibold">
                                Required Submission Files
                                <p className="font-normal text-white/80 mt-1 leading-relaxed">
                                    Teams must provide the following materials
                                    upon submission:
                                    <ul
                                        type="disc"
                                        className="list-disc list-outside pl-5 mt-2"
                                    >
                                        <li>Alternate Mix</li>
                                        <li>MP3 acapella</li>
                                        <li>WAV mix file</li>
                                        <li>
                                            All artwork assets created for the
                                            entry
                                        </li>
                                        <li>
                                            Any external assets used in the
                                            video
                                        </li>
                                    </ul>
                                </p>
                            </li>
                            <li className="text-white text-lg mb-5 font-semibold">
                                AI Policy
                                <p className="font-normal text-white/80 mt-1 leading-relaxed">
                                    Replay Chorus Battle has a strict anti-AI
                                    policy. The use of AI-generated content may
                                    result in severe score deductions and may
                                    lead to disqualification.
                                </p>
                            </li>
                        </ol>
                    </div>
                </div>
            </section>

            <section ref={section3Ref}>
                <h3 className="text-5xl font-arose text-white mb-2">
                    Section 3:{" "}
                    <span className="text-main-100">Judging Information</span>
                </h3>
                <ol type="1" className="list-decimal list-outside pl-6 mb-8">
                    <li className="text-white text-lg mb-5 font-semibold">
                        Competition Structure
                        <p className="font-normal text-white/80 mt-1 leading-relaxed">
                            The competition will consist of 3 total rounds.{" "}
                            <br />
                            Approximately 50% of participating teams from each
                            round will advance to the next round.
                        </p>
                    </li>
                    <li className="text-white text-lg mb-5 font-semibold">
                        Critiques
                        <p className="font-normal text-white/80 mt-1 leading-relaxed">
                            Teams may request critiques in any of the following
                            categories:
                            <ul
                                type="disc"
                                className="list-disc list-outside pl-5 mt-2"
                            >
                                <li>Vocals</li>
                                <li>Mixing</li>
                                <li>Art</li>
                                <li>Animation</li>
                            </ul>
                        </p>
                    </li>
                    <li className="text-white text-lg mb-5 font-semibold">
                        Scoresheets
                        <p className="font-normal text-white/80 mt-1 leading-relaxed">
                            Scoresheets and critiques will be distributed after
                            each judging period concludes.
                        </p>
                    </li>
                </ol>
            </section>
        </main>
    );
}
