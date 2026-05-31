import {Helmet} from "react-helmet-async";
import {contributing} from "../../../.velite";

export default function Contributing() {
    return (
        <>
            <Helmet>
                <title>Contributing | Index47</title>
            </Helmet>
            <div className="max-w-3xl mx-auto">
                <article
                    className="prose prose-lg"
                    dangerouslySetInnerHTML={{__html: contributing.content}}
                />
            </div>
        </>
    );
}
