import ReactMarkdown from "react-markdown";

const content = `
## About

**Index47** was founded in May 2026 by programmers from **FTC Team 13100**, known as the **47 Beavers**, hence the name **"Index47"** was derived. Since then, many contributors outside the team have regularly helped **expand** the project. It was created after observing that much of the FTC community lacks a **centralized** resource for references, acronyms, and commonly used libraries.
## User Guide

1. To **use** Index47, **type** in a search or acronym in the search bar, then click on your desired content
, you can then **re-search** whenever. To return to this page, simply **click** the **Index47** logo.
2. To begin **contributing**, review the **README.md** of the  [**repository**](https://github.com/index47ftc/Index47) for step by step instructions
3. To give **feedback** about Index47 complete this [**survey**](https://docs.google.com/forms/d/e/1FAIpQLSciLKZQnHIfkVuzVi12Tn8I9sOc8acrul_N9b96MCNsfIISHw/viewform) which will be taken into account by **developers** in later versions
## Developers and helpers
 All our developers and helpers can be found in the **Contributors** tab at the top. To join our **contributing** team, join the [**discord**](https://discord.gg/dAJUWgdun2). Specific links to their github is on the **README**


`;

export default function Index() {
    return (
        <div className="p-6 md:p-8 max-w-3xl mx-auto">
            <div className="flex justify-center mb-8">
                <img src="/Index47/i47.svg" alt="Index47" className="h-24 w-auto" />
            </div>
            <article className="prose index-page">
                <ReactMarkdown
                    components={{
                        a: ({href, children}) => (
                            <a href={href} target="_blank" rel="noopener noreferrer">
                                {children}
                            </a>
                        )
                    }}>
                    {content}
                </ReactMarkdown>
            </article>
        </div>
    );
}
