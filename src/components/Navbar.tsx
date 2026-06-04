import {SiDiscord, SiGithub} from "@icons-pack/react-simple-icons";
import logo from "../assets/index47.svg";
import {Link} from "react-router";
import {ClipboardList} from "lucide-react";
import {useSurvey} from "../lib/tally";
import {useDevice} from "../lib/responsive";
import DesktopSearch from "./DesktopSearch";

export default function Navbar() {
    const survey = useSurvey();
    const {desktop} = useDevice();

    return (
        <div className="bg-base-200 lg:flex lg:flex-col lg:h-full lg:min-w-7/24 lg:border-base-content/10 lg:border-r-2">
            <div className="p-4 border-b-2 border-base-content/10">
                <Link to="/" className="btn btn-ghost p-4 flex-col h-auto w-full gap-3">
                    <img src={logo} alt="Index 47 Logo" className="w-40" />
                    <p className="text-xs opacity-40">Your FTC Sidekick</p>
                </Link>
            </div>

            <div className="flex justify-center gap-2 items-center p-3 border-b-2 border-base-content/10">
                <a
                    href="https://github.com/index47ftc/Index47"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline btn-neutral shadow-none btn-square">
                    <SiGithub className="size-6" />
                </a>

                <a
                    href="https://discord.gg/e7F3Ku7Xuu"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline btn-neutral shadow-none btn-square">
                    <SiDiscord className="size-6" />
                </a>

                <button
                    onClick={survey}
                    className="btn btn-outline btn-neutral shadow-none btn-square">
                    <ClipboardList className="size-6" />
                </button>
            </div>

            {desktop && <DesktopSearch />}
        </div>
    );
}
