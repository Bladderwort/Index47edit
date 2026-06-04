import {useMemo} from "react";
import {Link} from "react-router";
import i47 from "../assets/i47.svg";
import Footer from "./Footer";

export default function NotFound() {
    const now = useMemo(
        () =>
            new Date().toLocaleTimeString([], {
                hour: "numeric",
                minute: "2-digit",
                hour12: true
            }),
        []
    );

    const oneMinuteAgo = useMemo(
        () =>
            new Date(Date.now() - 60_000).toLocaleTimeString([], {
                hour: "numeric",
                minute: "2-digit",
                hour12: true
            }),
        []
    );

    return (
        <div className="lg:flex lg:h-full lg:flex-col lg:grow">
            <div className="lg:grow flex items-center justify-center flex-col p-8 lg:p-0">
                <h1 className="text-4xl md:text-6xl font-bold text-center mb-16">404: Not Found</h1>
                <div className="lg:min-w-xl">
                    <div className="chat chat-end">
                        <div className="chat-image avatar avatar-placeholder">
                            <div className="bg-neutral text-neutral-content w-10 rounded-full">
                                <span className="text-lg">You</span>
                            </div>
                        </div>
                        <div className="chat-header">
                            You
                            <time className="text-xs opacity-50">{oneMinuteAgo}</time>
                        </div>
                        <div className="chat-bubble">Oh no! What do I do now?</div>
                        <div className="chat-footer opacity-50">Seen at {oneMinuteAgo}</div>
                    </div>
                    <div className="chat chat-start">
                        <div className="chat-image avatar">
                            <div className="w-10 rounded-full bg-base-200 border-base-content/10 border-2 p-1">
                                <img src={i47} className="translate-y-0.5" />
                            </div>
                        </div>
                        <div className="chat-header">
                            Index47
                            <time className="text-xs opacity-50">{now}</time>
                        </div>
                        <div className="chat-bubble">
                            Click&nbsp;
                            <Link to="/" className="link-info no-underline hover:underline">
                                here
                            </Link>
                            &nbsp;to go home.
                        </div>
                        <div className="chat-footer opacity-50">Delivered</div>
                    </div>
                    <div className="chat chat-start mt-2">
                        <div className="chat-image avatar">
                            <div className="w-10 rounded-full bg-base-200 border-base-content/10 border-2 p-1">
                                <img src={i47} className="translate-y-0.5" />
                            </div>
                        </div>
                        <div className="chat-header">
                            Index47
                            <time className="text-xs opacity-50">{now}</time>
                        </div>
                        <div className="chat-bubble">
                            If you thought this was a valid page,&nbsp;
                            <Link
                                to="/contributing"
                                className="link-info no-underline hover:underline">
                                add it to Index47
                            </Link>
                            .
                        </div>
                        <div className="chat-footer opacity-50">Delivered</div>
                    </div>
                </div>
            </div>
            <Footer absolute={false} />
        </div>
    );
}
