import {Link} from "react-router";

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
                <Contributor
                    name="Sid Shah"
                    github="siddharth-shah121"
                    title="Founder & Lead Developer"
                />
                <Contributor name="Davis Luxenberg" github="BeepBot99" title="Beta Testing Lead" />
                <Contributor name="Ishika Saini" github="ish-that-a-wish" title="UI/Design Lead" />
                <Contributor name="Mohit Patil" github="MomohitPatil" title="Workflow Lead" />
            </div>

            <h2 id="other-contributors">
                <a href="#other-contributors">Other Contributors</a>
            </h2>

            <p>Many people who aren't developers also contribute to Index47!</p>

            <div className="flex flex-wrap gap-4 my-8 not-prose">
                <Contributor github="MikeyIsANerd" />
                <Contributor name="DanTheCoder" github="Professor348" />
                <Contributor name="Ducks" github="Duck-things" />
                <Contributor name="NotTacos" github="NotTacos2" />
                <Contributor name="Zaamaloid" github="X2L1" />
            </div>

            <p>
                To add yourself to this list, see the&nbsp;
                <Link to="/contributing">contributing tab.</Link>
            </p>
        </div>
    );
}
