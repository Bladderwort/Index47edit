import {Outlet} from "react-router";
import Navbar from "../components/Navbar.tsx";
import {useSurvey} from "../lib/tally";

export default function Layout() {
    const survey = useSurvey();
    window.survey = survey;

    return (
        <div className="flex flex-col lg:flex-row lg:h-screen">
            <Navbar />
            <Outlet />
        </div>
    );
}

declare global {
    interface Window {
        survey: () => void;
    }
}
