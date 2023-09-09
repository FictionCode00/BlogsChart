import { Link, NavLink } from "react-router-dom";

const Header = () => {
    return (
        <>
            <header>
                <nav class="navbar navbar-expand-lg ">
                    <div class="container">
                        <Link class="navbar-brand" to="/"><img className="logo-img" src={require('../assets/images/newone.png')}/></Link>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"><i class="fas fa-bars"></i></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav">
                                <li class="">
                                    <NavLink class="" to="/">Home</NavLink>
                                </li>
                                <li class="nav-item">
                                    <NavLink class="nav-link" to="/blog">Blog</NavLink>
                                </li>
                                <li class="nav-item">
                                    <NavLink class="nav-link" to="/about">About Us</NavLink>
                                </li>
                                <li class="nav-item">
                                    <NavLink class="nav-link" to="/contact">Contact</NavLink>
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