import { useState } from "react"
import { AllBlogs, img_url } from "../services/apiService"
import { useEffect } from "react"
import moment from "moment/moment"
import { useNavigate } from "react-router-dom"

const Blog = () => {
    const [blogs,setBlogs]=useState([])
    let navigate=useNavigate()
    const BlogList=()=>{
        AllBlogs().then(response=>{
            if(response.status===200){
                setBlogs(response.data.data)
            }
        }).catch(err=>{
            console.log(err)
        })
    }

    useEffect(()=>{
        BlogList()
    },[])
 

    return (
        <>
            <section class="main-blog">
                <div class="container">
                    <div class="row d-flex align-items-center">
                        <div class="col-md-6">
                            <div class="main-log-left">
                                <h2>Blogs</h2>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                {/* <a href="#">Learn more </a> */}
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="main-log-right">
                                <img src={require("../assets/images/blog-uper.png")} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="reent-blog">
                <div class="container">
                    <h2>Most Recent Posts</h2>
                    <div class="row">
                        {blogs && blogs.slice().reverse().map((blog)=>
                        <div class="col-md-4" onClick={()=>navigate(`/${blog.slug}`)}>
                            <div class="recent-blog-inner">
                                <span>{moment(blog.createdAt).format("DD")}<br/>
                                    {moment(blog.createdAt).format("MMM")}</span>
                                <img src={img_url+blog.image?.data.split('/')[2]|| require("../assets/images/blog-one.png")} alt="" />
                                <div class="blog-data">
                                    <h5 className="bg-title">{blog.title}</h5>
                                    {/* <p>We offer a comprehensive online QA Training course...  </p> */}
                                    <div dangerouslySetInnerHTML={{__html: blog.description.split(' ').slice(0,10).join(' ')}} />
                                </div>
                            </div>
                        </div>
                        )}
                        {/* <div class="col-md-4">
                            <div class="recent-blog-inner">
                                <span>15<br/>
                                    Aug</span>
                                <img src={require("../assets/images/blog-two.png")} alt="" />
                                <div class="blog-data">
                                    <h5>Language Course</h5>
                                    <p>We offer a comprehensive online QA Training course...  </p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="recent-blog-inner">
                                <span>15<br/>
                                    Aug</span>
                                <img src={require("../assets/images/blog-three.png")} alt="" />
                                <div class="blog-data">
                                    <h5>Language Course</h5>
                                    <p>We offer a comprehensive online QA Training course...  </p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="recent-blog-inner">
                                <span>15<br/>
                                    Aug</span>
                                <img src={require("../assets/images/blog-one.png")} alt="" />
                                <div class="blog-data">
                                    <h5>Language Course</h5>
                                    <p>We offer a comprehensive online QA Training course...  </p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="recent-blog-inner">
                                <span>15<br/>
                                    Aug</span>
                                <img src={require("../assets/images/blog-two.png")} alt="" />
                                <div class="blog-data">
                                    <h5>Language Course</h5>
                                    <p>We offer a comprehensive online QA Training course...  </p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="recent-blog-inner">
                                <span>15<br/>
                                    Aug</span>
                                <img src={require("../assets/images/blog-three.png")} alt="" />
                                <div class="blog-data">
                                    <h5>Language Course</h5>
                                    <p>We offer a comprehensive online QA Training course...  </p>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>


            </section>
        </>
    )
}

export default Blog;