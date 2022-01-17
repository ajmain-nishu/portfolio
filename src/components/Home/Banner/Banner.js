import React from 'react';
import ownPhoto from '../../../Image/3.jpg'
import './Banner.css'

const Banner = () => {
    return (
        <div className="banner__color">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-12">
                        <div className="pt-5 mt-5">
                        <h1 className="pt-4">Md. Ajmain Iqtidar Rahman</h1>
                        <h2>Web Developer</h2>
                        <a href="https://drive.google.com/file/d/1tOwc5sLj9KUeOF2OcGx_UuO_2gqlO8Cj/view?usp=sharing" target="_blank">
                            <button className="btn btn-secondary">Download Resume</button>
                        </a>
                        
                        </div>
                    </div>
                    <div className="col-md-6 col-12">
                    <div className="p-5 m-5">
                    <div className="p-3 bg-dark rounded">
                        <img className="w-100 rounded" src={ownPhoto} alt="" />
                    </div>
                    </div>
                    
                    </div>
                </div>
            </div>
            <div>
                
            </div>
            
        </div>
    );
};

export default Banner;