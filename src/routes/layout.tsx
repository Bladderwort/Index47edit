import {Outlet} from "react-router";
import Sidebar from "../components/Sidebar";
import {useEffect, useRef} from "react";
import {useSurvey} from "../lib/tally";

export default function Layout() {
    const survey = useSurvey();
    const hasTracked = useRef(false);
    window.survey = survey;

    useEffect(() => {
        if (hasTracked.current) return;
        hasTracked.current = true;
        let visits = Number(localStorage.getItem("visits"));
        visits = Number.isNaN(visits) ? 1 : visits + 1;
        localStorage.setItem("visits", `${visits}`);
        if (visits === 3) {
            const timeout = setTimeout(survey, 10_000);
            return clearTimeout(timeout);
        }
    }, []);

    return (
        <div className="flex min-h-screen flex-row">
            <Sidebar />
            <Outlet />
        </div>
    );
}

declare global {
    interface Window {
        survey: () => void;
    }
}
