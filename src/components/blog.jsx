const Blog = () => {
    return (
        <>
            <section class="main-blog">
                <div class="container">
                    <div class="row d-flex align-items-center">
                        <div class="col-md-6">
                            <div class="main-log-left">
                                <h2>Growth & Culture</h2>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                <a href="#">Learn more </a>
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
                        </div>
                    </div>
                </div>


            </section>
        </>
    )
}

export default Blog;