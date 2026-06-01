import clsx from "clsx";
import {Home, Pencil, User} from "lucide-react";
import {NavLink, Outlet} from "react-router";
import Footer from "../../components/Footer";

export default function HomeLayout() {
    return (
        <div className="grow">
            <div className="tabs tabs-lg tabs-border z-50 font-medium bg-base-100/50 border-base-content/10 border-b-2 w-full max-w-[calc(100vw*17/24)] fixed backdrop-blur-md">
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
            <div className="px-8 overflow-y-auto min-h-0 max-h-screen w-full py-20">
                <Outlet />
            </div>
            <Footer />
        </div>
    );
}
