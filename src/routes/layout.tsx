import {Link, Outlet, useLocation} from "react-router";
import {SiDiscord, SiGithub} from "@icons-pack/react-simple-icons";
import SearchBar from "../components/SearchBar";
import {useEffect, useState} from "react";
import {HelpCircle, Search} from "lucide-react";
import {useAtom} from "jotai";
import {searchQueryAtom} from "../lib/state";

const CONTRIBUTORS = [
    "MikeyIsANerd",
    "Zammaloid",
    "Ducks",
    "NotTacos",
    "DanTheCoder"
];

export default function Layout() {
    const [tab, setTab] = useState("main");
    const [mobileSearchOpen, setMobileSearchOpen] = useState(false);
    const [searchQuery] = useAtom(searchQueryAtom);

    const location = useLocation();
    const isHomePage = location.pathname === "/";

    useEffect(() => {
        document.querySelectorAll("article a").forEach(link => {
            link.setAttribute("target", "_blank");
            link.setAttribute("rel", "noopener noreferrer");
        });
    });

    return (
        <div className="flex min-h-screen flex-col md:flex-row">

            {/* Sidebar */}
            <div className="hidden md:flex flex-col w-full md:w-auto md:sticky md:top-0 md:h-screen md:min-w-7/24 bg-base-200 border-b-2 border-base-content/10 md:border-b-0 md:border-r-2">

                <div className="p-4 border-b-2 border-base-content/10 text-center">
                    <Link to="/" className="btn btn-ghost p-6 md:p-8 uppercase font-mono w-full">
                        <img
                            src="/Index47/index47.svg"
                            alt="Index 47 Logo"
                            className="h-24 md:h-40 w-auto mx-auto"
                        />
                    </Link>
                    <p style={{ fontSize: '0.95rem' }}>Your FTC sidekick</p>
                </div>

                <div className="flex justify-center gap-2 items-center p-3 border-b-2 border-base-content/10">
                    <a
                        href="https://github.com/index47ftc/Index47"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-outline btn-neutral shadow-none btn-square"
                    >
                        <SiGithub className="size-6" />
                    </a>

                    <a
                        href="https://discord.gg/dAJUWgdun2"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-outline btn-neutral shadow-none btn-square"
                    >
                        <SiDiscord className="size-6" />
                    </a>

                    <a
                        href="https://docs.google.com/forms/d/e/1FAIpQLSciLKZQnHIfkVuzVi12Tn8I9sOc8acrul_N9b96MCNsfIISHw/viewform?usp=header"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-outline btn-neutral shadow-none btn-square"
                    >
                        <HelpCircle className="size-6" />
                    </a>
                </div>

                <SearchBar />
            </div>

            {/* Main Content */}
            <div className="grow flex flex-col">

                <div className="md:hidden p-4 border-b-2 border-base-content/10 text-center">
                    <Link to="/" className="btn btn-ghost p-4 uppercase font-mono w-full">
                        <img
                            src="/Index47/index47.svg"
                            alt="Index 47 Logo"
                            className="h-20 w-auto mx-auto"
                        />
                    </Link>
                    <p style={{ fontSize: '0.95rem' }}>Your FTC sidekick</p>
                </div>

                <div className="md:hidden border-b-2 border-base-content/10">
                    <div className="flex justify-between items-center p-3 font-mono">
                        <button
                            onClick={() => setMobileSearchOpen(prev => !prev)}
                            className="btn btn-ghost btn-square"
                            aria-label="Open search"
                        >
                            <Search className="size-6" />
                        </button>
                        <div className="flex">
                            <button
                                onClick={() => setTab("main")}
                                className={`px-4 py-2 text-sm border-b-2 -mb-0.5 transition-colors
                                    ${tab === "main"
                                        ? "border-primary text-base-content"
                                        : "border-transparent text-base-content/40 hover:text-base-content/70"}`}
                            >
                                Main
                            </button>

                            <button
                                onClick={() => setTab("contributors")}
                                className={`px-4 py-2 text-sm border-b-2 -mb-0.5 transition-colors
                                    ${tab === "contributors"
                                        ? "border-primary text-base-content"
                                        : "border-transparent text-base-content/40 hover:text-base-content/70"}`}
                            >
                                Contributors
                            </button>
                        </div>
                    </div>

                    {((mobileSearchOpen || searchQuery !== "")) && (
                        <div className="px-4 pb-4">
                            <SearchBar showAllIfEmpty={false} />
                        </div>
                    )}
                </div>

                {isHomePage ? (
                    <>
                        <div className="hidden md:flex justify-end border-b-2 border-base-content/10 font-mono">
                            <button
                                onClick={() => setTab("main")}
                                className={`px-6 py-3 text-sm border-b-2 -mb-0.5 transition-colors
                                    ${tab === "main"
                                        ? "border-primary text-base-content"
                                        : "border-transparent text-base-content/40 hover:text-base-content/70"}`}
                            >
                                Main
                            </button>

                            <button
                                onClick={() => setTab("contributors")}
                                className={`px-6 py-3 text-sm border-b-2 -mb-0.5 transition-colors
                                    ${tab === "contributors"
                                        ? "border-primary text-base-content"
                                        : "border-transparent text-base-content/40 hover:text-base-content/70"}`}
                            >
                                Contributors
                            </button>
                        </div>

                        <div className="grow flex flex-col items-center">
                            {tab === "main" && <Outlet />}

                            {tab === "contributors" && (
                                <>
                                    <div className="p-6 hidden md:flex justify-center">
                                        <img
                                            src="/Index47/i47.svg"
                                            alt="Index 47 Logo"
                                            className="h-24 w-auto"
                                        />
                                    </div>

                                    <div className="p-10 font-mono">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
                                            <div>
                                                <h1 className="text-3xl font-bold mb-2">
                                                    Developers
                                                </h1>

                                                <p className="text-base-content/50 mb-8 text-sm">
                                                    Core team behind development and maintenance.
                                                </p>

                                                <div className="space-y-3 text-sm">
                                                    <p><span className="text-primary">▸</span> Sid Shah - Founder & Lead Developer</p>
                                                    <p><span className="text-primary">▸</span> Davis Luxenberg - Beta Testing Lead</p>
                                                    <p><span className="text-primary">▸</span> Ishika Saini - UI/Design Lead</p>
                                                    <p><span className="text-primary">▸</span> Mohit Patil - Workflow Lead</p>
                                                </div>
                                            </div>

                                            <div>
                                                <h1 className="text-3xl font-bold mb-2">
                                                    Other contributors
                                                </h1>

                                                <p className="text-base-content/50 mb-8 text-sm">
                                                    Other people who made Index47 possible.
                                                </p>

                                                <ul className="space-y-3">
                                                    {CONTRIBUTORS.map((name) => (
                                                        <li
                                                            key={name}
                                                            className="flex items-center gap-3 text-sm"
                                                        >
                                                            <span className="text-primary">▸</span>
                                                            {name}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )}
                        </div>
                    </>
                ) : (
                    <div className="grow">
                        <Outlet />
                    </div>
                )}

                {/* Footer */}
                <footer className="p-4 border-t-2 border-base-content/10 text-center text-sm font-mono opacity-50">
                    © 2026 Index47. All rights reserved.
                </footer>
            </div>
        </div>
    );
}
