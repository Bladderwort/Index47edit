import {Search, X} from "lucide-react";
import {useMemo, useRef} from "react";
import {useHotkeys} from "react-hotkeys-hook";
import SearchResult from "./SearchResult";
import {terms} from "../../.velite";
import {useAtom} from "jotai";
import {searchQueryAtom} from "../lib/state";
import Fuse from "fuse.js";
import {Link} from "react-router";

export default function SearchBar() {
    const searchBar = useRef<HTMLInputElement>(null);
    useHotkeys("slash", e => {
        e.preventDefault();
        return searchBar.current?.focus();
    });

    const fuse = useMemo(
        () =>
            new Fuse(terms, {
                keys: ["title", "aliases"],
                ignoreLocation: true,
                threshold: 0.3
            }),
        []
    );

    const [searchQuery, setSearchQuery] = useAtom(searchQueryAtom);

    const hasQuery = searchQuery.trim().length > 0;

    const searchResults = useMemo(
        () =>
            hasQuery
                ? fuse.search(searchQuery).map(result => result.item)
                : terms.toSorted(
                      (a, b) =>
                          new Date(b.lastModified).getTime() - new Date(a.lastModified).getTime()
                  ),
        [searchQuery, fuse]
    );

    return (
        <div className="flex min-h-0 flex-1 flex-col p-4">
            <label className="floating-label">
                <span>Search</span>
                <div className="input w-full flex items-center">
                    <Search className="opacity-50 size-5 mr-1" />
                    <input
                        value={searchQuery}
                        onChange={e => setSearchQuery(e.target.value)}
                        ref={searchBar}
                        type="text"
                        placeholder="Search"
                        className="grow"
                    />
                    {searchQuery === "" && <kbd className="kbd kbd-md select-none ml-auto">/</kbd>}
                    {searchQuery !== "" && (
                        <button
                            onClick={() => setSearchQuery("")}
                            className="btn btn-ghost btn-sm btn-square translate-x-1">
                            <X className="size-5" />
                        </button>
                    )}
                </div>
            </label>

            {searchResults.length === 0 && hasQuery ? (
                <div className="mt-4 p-8 border border-base-content/10 bg-base-300 rounded-box text-center">
                    No results,{" "}
                    <Link to="/contributing" className="link-info no-underline hover:underline">
                        add a new page
                    </Link>
                    .
                </div>
            ) : (
                <ul className="list mt-4 min-h-0 overflow-y-auto border border-base-content/10 bg-base-300 rounded-box">
                    {searchResults.map(term => (
                        <SearchResult
                            key={term.slug}
                            title={term.title}
                            slug={term.slug}
                            date={term.lastModified}
                        />
                    ))}
                </ul>
            )}
        </div>
    );
}
