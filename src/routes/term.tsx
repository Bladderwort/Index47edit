import {useParams} from "react-router";
import {terms} from "../../.velite";

export default function Term() {
    const {slug} = useParams();
    console.log('slug:', slug);
    console.log('terms slugs:', terms.map(t => t.slug));
    const term = terms.find(term => term.slug == slug);

    return term ? (
        <div className="flex justify-center w-full p-8">
            <div className="w-full max-w-4xl">
                <h1 className="text-4xl font-bold mb-8 text-center">
                    {term.title}
                </h1>

                <article
                    className="prose prose-lg mx-auto"
                    dangerouslySetInnerHTML={{__html: term.content}}
                ></article>
            </div>
        </div>
    ) : (
        <div className="flex items-center justify-center h-full">
            <span>404 bum</span>
        </div>
    );
}