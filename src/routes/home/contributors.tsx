import {Link} from "react-router";
import {contributors} from "../../../.velite";

function Contributor({name, github, title}: {name?: string; github: string; title?: string}) {
    if (!name) name = github;
    return (
        <a
            href={`https://github.com/${github}`}
            target="_blank"
            rel="noopener noreferrer"
            className="not-prose">
            <div className="rounded-box bg-base-200 border-base-content/10 border-2 p-4 hover:opacity-80 hover:scale-98 transition duration-150">
                <div className="flex items-center gap-4 mb-2">
                    <div className="avatar">
                        <div className="size-12 rounded-full">
                            <img src={`https://github.com/${github}.png`} />
                        </div>
                    </div>
                    <div className="flex flex-col justify-between">
                        <p className="text-2xl font-bold">{name}</p>
                        {title && (
                            <p className="uppercase opacity-50 font-semibold text-sm text-base-content">
                                {title}
                            </p>
                        )}
                    </div>
                </div>
            </div>
        </a>
    );
}

export default function Contributors() {
    return (
        <div className="max-w-3xl mx-auto prose prose-lg">
            <h2 id="developers">
                <a href="#developers">Developers</a>
            </h2>

            <p>Our developers are the core team behind development and maintenance.</p>

            <div className="flex flex-wrap gap-4 my-8 not-prose">
                {contributors.developers.map(developer => (
                    <Contributor
                        key={developer.github}
                        name={developer.name}
                        github={developer.github}
                        title={developer.title}
                    />
                ))}
            </div>

            <h2 id="other-contributors">
                <a href="#other-contributors">Other Contributors</a>
            </h2>

            <p>Many people who aren't developers also contribute to Index47!</p>

            <div className="flex flex-wrap gap-4 my-8 not-prose">
                {contributors.contributors.map(contributor => (
                    <Contributor
                        key={contributor.github}
                        name={contributor.name}
                        github={contributor.github}
                    />
                ))}
            </div>

            <p>
                To add yourself to this list, see the&nbsp;
                <Link to="/contributing">contributing tab.</Link>
            </p>
        </div>
    );
}
