import { useEffect } from "react";

export default function useEvent(isMoveable,event, handler, passive=false) {
    useEffect(() => {
        // Always add event listener for continuous gameplay
        window.addEventListener(event, handler, passive);

        return function cleanUp() {
            window.removeEventListener(event, handler, passive);
        }
    });
}