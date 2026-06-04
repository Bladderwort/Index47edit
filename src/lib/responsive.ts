import {useMediaQuery} from "react-responsive";

export function useDevice() {
    const desktop = useMediaQuery({minWidth: 1024});
    return {desktop, mobile: !desktop};
}
