import {useCallback} from "react";
import {useTallyPopup} from "react-tally";

export function useSurvey() {
    const {open} = useTallyPopup("0Qav0j");
    return useCallback(() => {
        open({
            hideTitle: true
        });
    }, [open]);
}
