import { useState, useEffect } from "react";
import { useScrollInterface } from "../interfaces/useScrollDirectionInterface";



const useScrollDirection = ():useScrollInterface=>{

    const [scrollDirection, setScrollDirection] = useState<string>("")
    

useEffect(()=>{
let lastScrollY:number = window.scrollY

    const updateDirection = ():void =>{
      const scrollYDirection:number = window.scrollY
      const direction:string = scrollYDirection > lastScrollY ? "down" : "up" ;
      if(direction !== scrollDirection && (scrollYDirection - lastScrollY > 10 || scrollYDirection - lastScrollY < -10)){
        setScrollDirection(direction)

      }
      lastScrollY = scrollYDirection > 0 ? scrollYDirection : 0

    }

    window.addEventListener("scroll", updateDirection)
    return ()=>{
        window.removeEventListener("scroll", updateDirection)
    }
}, [scrollDirection])


return  {scrollDirection}
}

export default useScrollDirection;