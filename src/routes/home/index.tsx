import {useNavigate} from "react-router";
import {home} from "../../../.velite";
import {Helmet} from "react-helmet-async";

export default function Index() {
    const navigate = useNavigate();
    return (
        <>
            <Helmet>
                <title>Index47</title>
            </Helmet>
            <article
                className="prose prose-md md:prose-lg max-w-3xl mx-auto"
                dangerouslySetInnerHTML={{__html: home.content}}
                onClick={e => {
                    if (!(e.target instanceof Element)) return;
                    const href = e.target.closest("a")?.getAttribute("href");
                    if (href?.startsWith("/")) {
                        e.preventDefault();
                        navigate(href);
                    }
                }}
            />
        </>
    );
}
