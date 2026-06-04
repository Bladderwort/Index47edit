import {useParams} from "react-router";
import {terms} from "../../.velite";
import {Helmet} from "react-helmet-async";
import Footer from "../components/Footer";
import {useDevice} from "../lib/responsive";
import MobileSearch from "../components/MobileSearch";
import NotFound from "../components/NotFound";

export default function Term() {
    const {slug} = useParams();

    const term = terms.find(term => term.slug == slug);

    const date = new Date(term?.lastModified ?? Date.now()).toLocaleDateString([], {
        month: "long",
        day: "numeric",
        year: "numeric"
    });

    const {desktop, mobile} = useDevice();

    return (
        <>
            <Helmet>
                <title>{`${term?.title ?? "404"} | Index47`}</title>
            </Helmet>
            {term ? (
                <div className="lg:grow lg:relative">
                    {mobile && <MobileSearch />}
                    <div className="p-8 lg:pb-20 lg:overflow-y-auto lg:h-screen">
                        <div className="max-w-3xl mx-auto">
                            <h1 className="text-4xl font-bold mb-8 text-center">{term.title}</h1>
                            <article
                                className="prose prose-md md:prose-lg"
                                dangerouslySetInnerHTML={{__html: term.content}}
                            />
                            <div className="divider"></div>
                            <p className="italic opacity-70">
                                Last updated on {date} by {term.lastModifiedBy}
                            </p>
                        </div>
                    </div>
                    <Footer absolute={desktop} />
                </div>
            ) : (
                <NotFound />
            )}
        </>
    );
}
