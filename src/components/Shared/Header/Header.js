import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className="text-white">
            <nav className="navbar navbar-expand-md bg-secondary navbar-light py-3">
                <div className="container">

                    {/* header logo */}
                    <Link className="navbar-brand text-white" to="/home">
                        <h2><i>Portfolio</i></h2>
                    </Link>


                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    {/* header link */}
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">

                            {/* home link */}
                            <li className="nav-item">
                                <Link
                                    className="nav-link fs-5 text-white"
                                    to="/home">
                                    Home
                                </Link>
                            </li>

                            {/* services link */}
                            <li className="nav-item">
                                <Link className="nav-link fs-5 text-white" to="/projects">
                                    Projects
                                </Link>
                            </li>


                            <li className="nav-item">
                                <Link className="nav-link fs-5 text-white" to="/blogs">
                                    Blogs
                                </Link>
                            </li>

                            

                            {/* contact part */}
                            {/* <li className="nav-item">
                                <Link
                                    className="nav-link fs-5"
                                    to="/">
                                    Contact
                                </Link>
                            </li> */}

                            {/* doctor part */}
                            


                            
                                

                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;