import KeepAlive from "./components/KeepAlive";
import {useEffect, useRef} from "react";
import {useLocation} from "react-router-dom"

export function useOnActive(cb: () => any, skipMount = true) {
    const domRef = useRef<HTMLDivElement>(null)
    const location = useLocation()
    const isMount = useRef(false)
    useEffect(() => {
        let destroyCb: any
        if (domRef.current) {
            const parent = domRef.current?.parentElement
            if (parent) {
                const id = parent.id
                const fullPath = location.pathname + location.search
                if (id === fullPath) {
                    if (skipMount) {
                        if (isMount.current) destroyCb = cb()
                    } else {
                        destroyCb = cb()
                    }
                }
            }
        }
        isMount.current = true
        return () => {
            if (destroyCb && typeof destroyCb === "function") {
                destroyCb()
            }
        }
    }, [location])
    return domRef
}


export default KeepAlive;