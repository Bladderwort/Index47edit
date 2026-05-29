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
            <li className="list-row">
                <div className="list-col-grow">
                    <div>{title}</div>
                <div className="text-[0.65rem] uppercase font-semibold text-[#d9d9d9]">
                    Last Updated on __{formattedDate}__
                        </div>
                </div>
                <span className="btn btn-square btn-ghost">
                    <ArrowRight className="size-6" />
                </span>
            </li>
        </Link>
    );
}
