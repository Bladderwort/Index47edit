import {Outlet} from "react-router";
import Footer from "../../components/Footer";
import Tabs from "../../components/Tabs";

export default function HomeLayout() {
    return (
        <div className="grow relative">
            <Tabs />
            <div className="px-8 overflow-y-auto max-h-screen py-20">
                <Outlet />
            </div>
            <Footer />
        </div>
    );
}
