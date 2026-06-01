import {Heart} from "lucide-react";

export default function Footer() {
    return (
        <div className="border-base-content/10 border-t-2 bg-base-100/50 fixed bottom-0 w-[calc(100vw*17/24)] flex items-center justify-center p-4 backdrop-blur-md z-50">
            <p className="opacity-50 text-center text-sm">
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
