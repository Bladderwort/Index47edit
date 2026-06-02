import {Helmet} from "react-helmet-async";
import {contributing} from "../../../.velite";

export default function Contributing() {
    return (
        <>
            <Helmet>
                <title>Contributing | Index47</title>
            </Helmet>
            <article
                className="prose prose-lg mx-auto max-w-3xl"
                dangerouslySetInnerHTML={{__html: contributing.content}}
            />
        </>
    );
}
