import { useState } from "react";
import { NavLink } from "react-router-dom";

const links = [
    { to: "/", label: "About" },
    { to: "/rules", label: "Rules" },
    { to: "/schedule", label: "Schedule" },
    { to: "/scoring", label: "Scoring" },
    { to: "/staff", label: "Staff" },
];

export default function Navbar() {
    const [open, setOpen] = useState(false);

    const linkClass = ({ isActive }) =>
        isActive
            ? "text-main-100 border-b-2 border-main-100 pb-0.5 font-arose text-lg"
            : "text-white hover:text-main-100 transition-colors font-arose text-lg";

    return (
        <nav className="sticky top-0 z-50 bg-black px-6 py-4 flex items-center">
            <div className="max-w-6xl mx-auto flex items-center justify-between">
                {/* Desktop links */}
                <ul className="hidden md:flex gap-8">
                    {links.map(({ to, label }) => (
                        <li key={to}>
                            <NavLink
                                to={to}
                                end={to === "/"}
                                className={linkClass}
                            >
                                {label}
                            </NavLink>
                        </li>
                    ))}
                </ul>

                {/* Hamburger button */}
                <button
                    className="md:hidden text-white hover:text-[#a60000] focus:outline-none"
                    onClick={() => setOpen((prev) => !prev)}
                    aria-label="Toggle menu"
                >
                    {open ? (
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    ) : (
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    )}
                </button>
            </div>

            {/* Mobile menu */}
            {open && (
                <ul className="md:hidden mt-4 flex flex-col gap-3 px-2">
                    {links.map(({ to, label }) => (
                        <li key={to}>
                            <NavLink
                                to={to}
                                end={to === "/"}
                                className={linkClass}
                                onClick={() => setOpen(false)}
                            >
                                {label}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            )}
        </nav>
    );
}
