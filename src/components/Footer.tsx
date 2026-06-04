import clsx from "clsx";
import {Heart} from "lucide-react";

export default function Footer({absolute = true}: {absolute?: boolean}) {
    return (
        <div
            className={clsx(
                "border-base-content/10 border-t-2 bg-base-100 lg:bg-base-100/50 bottom-0 w-full flex items-center justify-center p-4 lg:backdrop-blur-md z-50",
                absolute && "absolute"
            )}>
            <p className="opacity-50 text-center text-xs sm:text-sm">
                &copy; 2026 Index47. All rights reserved. Licensed under the MIT License. Website
                made with <Heart className="size-4 inline fill-info -translate-y-0.5 text-info" />
                &nbsp;by&nbsp;
                <a
                    href="https://github.com/BeepBot99"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-info no-underline hover:underline">
                    Davis Luxenberg
                </a>
                .
            </p>
        </div>
    );
}
