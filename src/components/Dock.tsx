import clsx from "clsx";
import {Home, Pencil, User} from "lucide-react";
import {NavLink} from "react-router";

export default function Dock() {
    return (
        <div className="dock top-[calc(--spacing(18)+1px)] sticky border-t-0 border-b-2 border-base-content/10 bg-base-100/50 backdrop-blur-md">
            <NavLink to="/" className={({isActive}) => clsx(isActive && "dock-active")}>
                <Home className="size-6" />
                <span className="dock-label">Home</span>
            </NavLink>

            <NavLink to="/contributors" className={({isActive}) => clsx(isActive && "dock-active")}>
                <User className="size-6" />
                <span className="dock-label">Contributors</span>
            </NavLink>

            <NavLink to="/contributing" className={({isActive}) => clsx(isActive && "dock-active")}>
                <Pencil className="size-6" />
                <span className="dock-label">Contributing</span>
            </NavLink>
        </div>
    );
}
