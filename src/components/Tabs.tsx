import clsx from "clsx";
import {Home, User, Pencil} from "lucide-react";
import {NavLink} from "react-router";

export default function Tabs() {
    return (
        <div className="tabs tabs-lg tabs-border z-50 font-medium bg-base-100/50 border-base-content/10 border-b-2 w-full absolute backdrop-blur-md">
            <NavLink to="/" className={({isActive}) => clsx("tab", isActive && "tab-active")}>
                <Home className="size-4 mr-2" /> Home
            </NavLink>

            <NavLink
                to="/contributors"
                className={({isActive}) => clsx("tab", isActive && "tab-active")}>
                <User className="size-4 mr-2" /> Contributors
            </NavLink>

            <NavLink
                to="/contributing"
                className={({isActive}) => clsx("tab", isActive && "tab-active")}>
                <Pencil className="size-4 mr-2" /> Contributing
            </NavLink>
        </div>
    );
}
