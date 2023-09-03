import { Link } from "react-router-dom";

const Footer = () => {
    const handleClick = () => {
        // Scroll to the top of the page
        window.scrollTo(0, 0);
      };
    return (
        <>
            <footer class="main-footer">
                <div class="container">
                    <div class="row">
                        <div class="col-md-6">
                            <div class="footer-left">
                                <div class="logo-ft">
                                    <a href="#">Wagedifferentials</a>
                                </div>
                                <p>Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy.</p>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="footer-right">
                                <ul class="ft-link">
                                    <li >
                                        <Link class="nav-link active" to="/" onClick={handleClick}>Home</Link>
                                    </li>
                                    <li >
                                        <Link class="nav-link" to="/about" onClick={handleClick}>About Us</Link>
                                    </li>
                                    <li >
                                        <Link class="nav-link" to="/blog" onClick={handleClick}>Blog</Link>
                                    </li>
                                    <li >
                                        <Link class="nav-link" to="/contact" onClick={handleClick}>Contact</Link>
                                    </li>
                                </ul>
                                <ul class="social-link">
                                    <li><a href="#">Dr</a></li>
                                    <li><a href="#">Be</a></li>
                                    <li><a href="#">Lg</a></li>
                                    <li><a href="#">Tw</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="copy-right">
                        <p>Copyright Tanah Air Studio</p>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;