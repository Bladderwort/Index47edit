import {Link, useParams} from "react-router";
import {terms} from "../../.velite";
import {Helmet} from "react-helmet-async";
import Footer from "../components/Footer";
import i47 from "../assets/i47.svg";
import {useMemo} from "react";

export default function Term() {
    const {slug} = useParams();

    const term = terms.find(term => term.slug == slug);

    const date = new Date(term?.lastModified ?? Date.now()).toLocaleDateString([], {
        month: "long",
        day: "numeric",
        year: "numeric"
    });

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
        <>
            <Helmet>
                <title>{`${term?.title ?? "404"} | Index47`}</title>
            </Helmet>
            {term ? (
                <div className="grow relative">
                    <div className="p-8 overflow-y-auto max-h-screen w-full pb-20">
                        <div className="max-w-3xl mx-auto">
                            <h1 className="text-4xl font-bold mb-8 text-center">{term.title}</h1>
                            <article
                                className="prose prose-lg"
                                dangerouslySetInnerHTML={{__html: term.content}}
                            />
                            <div className="divider"></div>
                            <p className="italic opacity-70">
                                Last updated on {date} by {term.lastModifiedBy}
                            </p>
                        </div>
                    </div>
                    <Footer />
                </div>
            ) : (
                <div className="flex h-full flex-col grow">
                    <div className="grow flex items-center justify-center flex-col">
                        <h1 className="text-6xl font-bold text-center mb-16">404: Not Found</h1>
                        <div className="min-w-xl">
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
            )}
        </>
    );
}
