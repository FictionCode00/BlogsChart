import { useEffect } from "react"

const ScrollToTop=()=>{
    useEffect(()=>{
        console.log("scroll");
        window.scrollTo(0, 0);
    },[])

    return (null)

}
export default ScrollToTop;