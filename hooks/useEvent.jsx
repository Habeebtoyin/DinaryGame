import { useEffect } from "react";

export default function useEvent(isMoveable,event, handler, passive=false) {
    useEffect(() => {
        if(isMoveable){
            return 
        }else{
        window.addEventListener(event, handler, passive);

        return function cleanUp() {
            window.removeEventListener(event, handler, passive);
        }
    }
    });
}