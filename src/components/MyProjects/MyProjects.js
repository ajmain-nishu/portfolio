import React, { useEffect, useState } from 'react';
import MySingleProject from '../MySingleProject.js/MySingleProject';

const MyProjects = () => {
    const [myProjects, setMyProjects] = useState([])

    // local data fetch
    useEffect(() => {
        fetch("./Service.json")
            .then((res) => res.json())
            .then((data) => setMyProjects(data));
    }, []);
    return (
        <div className=" py-5">

            {/* text section */}
            <h2 className="text-center display-4 fw-bold pt-5 pb-4 mt-5">Projects</h2>
            <div className="container">
                <div className="col-12">
                    <div className="row pb-3">

                        {/* value pass in other component */}
                        {
                            myProjects.map(msp => <MySingleProject key={msp.id} homeservices={msp}></MySingleProject>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyProjects;