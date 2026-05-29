import {ArrowRight} from "lucide-react";
import {useMemo} from "react";
import {Link} from "react-router";

export default function SearchResult({
    title,
    date,
    slug
}: {
    title: string;
    date: string;
    slug: string;
}) {
    const formattedDate = useMemo(
        () =>
            new Date(date).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric"
            }),
        [date]
    );

    return (
        <Link to={`/${slug}`} className="hover:opacity-75 transition duration-250 hover:scale-98">
            <li className="list-row gap-4">
                <div className="list-col-grow flex flex-col gap-1">
                    <div className="font-semibold">{title}</div>
                </div>
                <span className="btn btn-square btn-ghost">
                    <ArrowRight className="size-6" />
                </span>
            </li>
        </Link>
    );
}
