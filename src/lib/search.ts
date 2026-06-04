import Fuse from "fuse.js";
import {useMemo} from "react";
import {terms} from "../../.velite";

export function useSearch(searchQuery: string) {
    const hasQuery = searchQuery.trim().length > 0;

    const fuse = useMemo(
        () =>
            new Fuse(terms, {
                keys: ["title", "aliases"],
                ignoreLocation: true,
                threshold: 0.3
            }),
        []
    );

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

    return searchResults;
}
