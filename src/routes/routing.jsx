import About from "../components/about";
import Blog from "../components/blog";
import BlogDetails from "../components/blogDetails";
import Contact from "../components/contact";

const { Routes, Route } = require("react-router-dom")
const { default: Home } = require("../components/home")


const Routing=()=>{
    return(
        <>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/blog" element={<Blog/>}/>
            <Route path="/:slug" element={<BlogDetails/>}/>
            <Route path="/contact" element={<Contact/>}/>
        </Routes>
        
        
        </>
    )
}

export default Routing;