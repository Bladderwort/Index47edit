import clsx from "clsx";
import {Search, X} from "lucide-react";
import {useEffect, useRef, useState} from "react";
import {useSearch} from "../lib/search";
import SearchResult from "./SearchResult";
import {Link} from "react-router";

export default function MobileSearch() {
    const searchBar = useRef<HTMLInputElement>(null);
    const [searchQuery, setSearchQuery] = useState("");
    const [searchActive, setSearchActive] = useState(false);

    useEffect(() => {
        if (!searchActive) setSearchQuery("");
    }, [searchActive]);

    const searchResults = useSearch(searchQuery);

    return (
        <div
            className={clsx(
                "p-4 bg-base-200 top-0 z-50",
                searchActive
                    ? "fixed h-dvh max-h-dvh flex flex-col w-full"
                    : "border-base-content/10 border-b-2 sticky"
            )}>
            <div className={clsx(searchActive ? "join w-full" : "flex")}>
                <label className="floating-label grow">
                    <span>Search</span>
                    <div className="input w-full flex items-center join-item">
                        <Search className="opacity-50 size-5 mr-1" />
                        <input
                            value={searchQuery}
                            onChange={e => setSearchQuery(e.target.value)}
                            onFocus={() => setSearchActive(true)}
                            ref={searchBar}
                            type="text"
                            placeholder="Search"
                            className="grow"
                        />
                    </div>
                </label>
                {searchActive && (
                    <button
                        onClick={() => setSearchActive(false)}
                        className={clsx("btn join-item btn-square btn-info btn-soft")}>
                        <X className="size-6" />
                    </button>
                )}
            </div>

            {searchActive &&
                (searchResults.length === 0 ? (
                    <div className="mt-4 p-8 border border-base-content/10 bg-base-300 rounded-box text-center">
                        No results,{" "}
                        <Link
                            to="/contributing"
                            onClick={() => setSearchActive(false)}
                            className="link-info no-underline hover:underline">
                            add a new page
                        </Link>
                        .
                    </div>
                ) : (
                    <ul className="list min-h-0 overflow-y-auto mt-4 border border-base-content/10 bg-base-300 rounded-box">
                        {searchResults.map(term => (
                            <SearchResult
                                key={term.slug}
                                title={term.title}
                                slug={term.slug}
                                date={term.lastModified}
                            />
                        ))}
                    </ul>
                ))}
        </div>
    );
}
