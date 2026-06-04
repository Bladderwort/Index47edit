import {ArrowRight} from "lucide-react";
import {useMemo} from "react";
import {Link} from "react-router";

export default function SearchResult({
    title,
    date,
    slug,
    onClick
}: {
    title: string;
    date: string;
    slug: string;
    onClick?: () => void;
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
        <Link
            to={`/${slug}`}
            onClick={onClick}
            className="hover:opacity-75 transition duration-250 hover:scale-98">
            <li className="list-row">
                <div className="list-col-grow flex flex-col gap-1">
                    <div className="font-semibold text-md">{title}</div>
                    <div className="text-xs uppercase font-bold text-base-content/40">
                        Last updated {formattedDate}
                    </div>
                </div>
                <span className="btn btn-square btn-ghost">
                    <ArrowRight className="size-6" />
                </span>
            </li>
        </Link>
    );
}
