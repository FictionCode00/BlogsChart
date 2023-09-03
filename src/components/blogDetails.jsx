import { useNavigate, useParams } from "react-router-dom";
import { AllBlogs, getBlogDetails, img_url } from "../services/apiService";
import { useEffect, useState } from "react";
import moment from "moment";

const BlogDetails = () => {
    const { slug } = useParams()
    const [title, setTitle] = useState('')
    const [image, setImage] = useState('')
    const [description, setDescription] = useState('')
    const [blogs, setBlogs] = useState([])
    let navigate=useNavigate()

    const blogDetails = () => {
        getBlogDetails(slug).then(response => {
            if (response.status === 200) {
                setTitle(response.data.data.title)
                setImage(response.data.data.image.data.split('/')[2])
                setDescription(response.data.data.description)

            }
        })
    }


    const BlogList = () => {
        AllBlogs().then(response => {
            if (response.status === 200) {
                setBlogs(response.data.data)
            }
        }).catch(err => {
            console.log(err)
        })
    }

    useEffect(() => {
       
        blogDetails()
        BlogList()
    }, [window.location.pathname])
    return (
        <>
            <section class="main-blog author-banr">
                <div class="container">
                    <div class="row d-flex align-items-center">
                        <div class="col-md-6">
                            <div class="main-log-left">
                                <h2>{title}</h2>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="main-log-right">
                                <img src={img_url+image} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="singlle-post-blog">
                <div class="container">
                    <div class="row">
                        {/* <div class="col-md-8">
                            <div class="single-post-left">
                                <h3>How it’s going!</h3>
                                <p>Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring.Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.</p>
                                <p>Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring.Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment. Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring.Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.</p>
                                <h3>Recommended Food in Norway!</h3>
                                <p>Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring.Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.</p>
                                <div class="row corener-round">
                                    <div class="col-md-6">
                                        <div class="inner-img-blog">
                                            <img src={require("../assets/images/single-blog-one.png")} alt="" />
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="inner-img-blog">
                                            <img src={require("../assets/images/single-blog-one.png")} alt="" />
                                        </div>
                                    </div>
                                </div>
                                <h6>Photos taken by Jack Harper</h6>
                                <p>Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring.Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.</p>
                                <div class="row">
                                    <div class="col-md-4">
                                        <div class="inner-img-blog">
                                            <img src={require("../assets/images/adv-one.png")} alt="" />
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="inner-img-blog">
                                            <img src={require("../assets/images/adv-two.png")} alt="" />
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="inner-img-blog">
                                            <img src={require("../assets/images/adv-three.png")} alt="" />
                                        </div>
                                    </div>
                                </div>
                                <h3>Tags</h3>
                                <ul class="tags">
                                    <li>NEW YEAR</li>
                                    <li>RESOLUTION</li>
                                    <li>MOTIVATION</li>
                                    <li>DREAM</li>
                                </ul>
                                <div class="pre-next-sec">
                                    <div class="row corener-round">
                                        <div class="col-md-6">
                                            <div class="inner-img-blog">
                                                <span>Previous</span>
                                                <img src={require("../assets/images/pre.png")} alt="" />
                                                <h5>Top 5 Destination
                                                    in Japan</h5>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="inner-img-blog">
                                                <span>Next</span>
                                                <img src={require("../assets/images/pre.png")} alt="" />
                                                <h5>Tips for Work-Life
                                                    Balance Work From Home</h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="comenting">
                                    <h5>2 Comments</h5>
                                    <ul>
                                        <li>
                                            <span><img src={require("../assets/images/user.png")} alt="" /></span>
                                            <div>
                                                <h4>Daniel Atlas</h4>
                                                <span>Januari 2, 2020 at 10:10 AM</span>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                            </div>
                                        </li>
                                        <li>
                                            <span><img src={require("../assets/images/user.png")} alt="" /></span>
                                            <div>
                                                <h4>Magdalena Angel</h4>
                                                <span>Januari 2, 2020 at 10:10 AM</span>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div> */}
                        <div className="col-md-8" dangerouslySetInnerHTML={{ __html: description }} />
                        <div class="col-md-4">
                            <div class="single-post-right">
                                {/* <h6>Search</h6>
                                <div class="form-group">
                                    <input type="text" placeholder="Enter keywords" />
                                    <button><i class="fas fa-arrow-right"></i></button>
                                </div> */}
                                <h6>Recent Posts</h6>
                                <ul class="populra-post">
                                    {blogs.slice(-3).reverse().map((blog) =>


                                        <li class="blog-li" onClick={()=>navigate(`/${blog.slug}`)}>
                                            <span><img class="blog-image" src={img_url + blog.image.data.split('/')[2]} alt="" /></span>
                                            <div>
                                                <h5>{blog.title}</h5>
                                                <p>{moment(blog.createdAt).format("MMM DD, YYYY")}</p>
                                            </div>
                                        </li>
                                    )}
                                </ul>
                                {/* <h6>Tags</h6>
                                <ul class="tags">
                                    <li>NEW YEAR</li>
                                    <li>RESOLUTION</li>
                                    <li>MOTIVATION</li>
                                    <li>DREAM</li>
                                </ul> */}
                                {/* <div class="videopost">
                                    <img src={require("../assets/images/video.png")} alt="" />
                                </div> */}
                                {/* <h6>Our Social Media</h6>
                                <ul class="social-link">
                                    <li><a href="#">Dr</a></li>
                                    <li><a href="#">Be</a></li>
                                    <li><a href="#">Lg</a></li>
                                    <li><a href="#">Tw</a></li>
                                </ul> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default BlogDetails;