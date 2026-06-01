import {defineCollection, defineConfig, defineSchema, s} from "velite";
import paths from "path";
import simpleGit, {type DefaultLogFields, type ListLogLine} from "simple-git";
import gfm from "remark-gfm";
import smartypants from "remark-smartypants";
import autolinkHeadings, {type Options as AutolinkHeadingsOptions} from "rehype-autolink-headings";
import externalLinks, {type Options as ExternalLinksOptions} from "rehype-external-links";
import slug from "rehype-slug";
import highlight, {type Options as HighlightOptions} from "rehype-highlight";

const git = simpleGit();

function gitLog<T>(transformer: (log: DefaultLogFields & ListLogLine) => T) {
    return defineSchema(() =>
        s
            .custom<T | undefined>(() => true)
            .transform<T>(async (_, {meta}) => {
                const log = await git.log({file: meta.path, maxCount: 1});
                return transformer(log.latest!!);
            })
    );
}

const lastModified = gitLog(log => new Date(log.date || Date.now()).toISOString());
const lastModifiedBy = gitLog(log => log.author_name);

const terms = defineCollection({
    name: "Term",
    pattern: "terms/*.md",
    schema: s.object({
        title: s.string(),
        aliases: s.string().array().default([]),
        content: s.markdown(),
        slug: s.path().transform<string>(path => paths.basename(path)),
        lastModified: lastModified(),
        lastModifiedBy: lastModifiedBy()
    })
});

const home = defineCollection({
    name: "Home",
    pattern: "home.md",
    single: true,
    schema: s.object({
        content: s.markdown()
    })
});

const contributing = defineCollection({
    name: "Contributing",
    pattern: "contributing.md",
    single: true,
    schema: s.object({
        content: s.markdown()
    })
});

const contributors = defineCollection({
    name: "Contributors",
    pattern: "contributors.yaml",
    single: true,
    schema: s.object({
        developers: s
            .object({
                name: s.string(),
                github: s.string(),
                title: s.string()
            })
            .array(),
        contributors: s
            .object({
                name: s.string().optional(),
                github: s.string()
            })
            .array()
    })
});

export default defineConfig({
    collections: {
        terms,
        home,
        contributing,
        contributors
    },
    markdown: {
        remarkPlugins: [gfm, smartypants as any],
        rehypePlugins: [
            slug,
            [
                autolinkHeadings,
                {
                    behavior: "wrap"
                } satisfies AutolinkHeadingsOptions
            ],
            [
                externalLinks,
                {
                    target: "_blank",
                    rel: ["noopener", "noreferrer"]
                } satisfies ExternalLinksOptions
            ],
            [highlight, {} satisfies HighlightOptions]
        ]
    }
});
