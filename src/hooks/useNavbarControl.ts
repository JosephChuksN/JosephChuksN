import { useState, useEffect } from "react";
import { NavHookInterface } from "../interfaces/navHookInterface";


 const useNavbarControl = ():NavHookInterface => {
    const [isNavOpen, setIsNavOpen] = useState<boolean>(false)

    const handleNavigation = ():void => setIsNavOpen(!isNavOpen)


    useEffect(()=>{
        const documentStyle:string = window.getComputedStyle(document.body).overflow 

        if(isNavOpen){
            document.body.style.overflow="hidden"
        }

        return ()=>{
            document.body.style.overflow = documentStyle
        }
    })

return {isNavOpen, handleNavigation}
}

export default useNavbarControl 