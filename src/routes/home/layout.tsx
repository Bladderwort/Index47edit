import {Outlet} from "react-router";
import Footer from "../../components/Footer";
import Tabs from "../../components/Tabs";
import Dock from "../../components/Dock";
import {useDevice} from "../../lib/responsive";
import MobileSearch from "../../components/MobileSearch";

export default function HomeLayout() {
    const {desktop} = useDevice();
    return (
        <div className="lg:grow lg:relative">
            {desktop ? (
                <Tabs />
            ) : (
                <>
                    <MobileSearch />
                    <Dock />
                </>
            )}
            <div className="p-8 lg:py-20 lg:overflow-y-auto lg:h-screen">
                <Outlet />
            </div>
            <Footer absolute={desktop} />
        </div>
    );
}
