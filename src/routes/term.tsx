import {useParams} from "react-router";
import {terms} from "../../.velite";
import {Helmet} from "react-helmet-async";
import Footer from "../components/Footer";

export default function Term() {
    const {slug} = useParams();

    const term = terms.find(term => term.slug == slug);

    const date = new Date(term?.lastModified ?? Date.now()).toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric"
    });

    return (
        <>
            <Helmet>
                <title>{`${term?.title ?? "404"} | Index47`}</title>
            </Helmet>
            <div className="grow">
                <div className="p-8 overflow-y-auto min-h-0 max-h-screen w-full pb-20">
                    {term && (
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
                    )}
                </div>
                <Footer />
            </div>
        </>
    );
}
