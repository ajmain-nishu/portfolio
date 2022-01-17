import React from "react";
import { NavLink } from "react-router-dom";
// import footerImg from '../../../Images/footer.png';


// footer section
const Footer = () => {
    return (
        <div>
            <div className="text-center bg-secondary py-4 text-white">
                
                {/* footer image */}
                {/* <img className="py-4" src={footerImg} alt="" /> */}

                {/* footer text */}
                <p className="fs-5 text-white">Copyright &copy; 2021</p>
                <p className="fs-6">
                    Designed By:
                    <span className="fw-bold text-white"> Ajmain Iqtidar Rahman</span>
                </p>

                {/* footer button */}
                <NavLink
                    className="text-decoration-none btn btn-light mb-4"
                    to="/home"
                >
                    Home
                </NavLink>
            </div>
        </div>
    );
};



export default Footer;