import { Link } from "react-router-dom";

const Header = () => {
    return (
        <>
            <header>
                <nav class="navbar navbar-expand-lg ">
                    <div class="container">
                        <a class="navbar-brand" href="#">Logo</a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"><i class="fas fa-bars"></i></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav">
                                <li class="nav-item">
                                    <Link class="nav-link active" to="/">Home</Link>
                                </li>
                                <li class="nav-item">
                                    <Link class="nav-link" to="/about">About Us</Link>
                                </li>
                                <li class="nav-item">
                                    <Link class="nav-link" to="/blog">Blog</Link>
                                </li>
                                <li class="nav-item">
                                    <Link class="nav-link" to="/contact">Contact</Link>
                                </li>


                            </ul>

                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Header;