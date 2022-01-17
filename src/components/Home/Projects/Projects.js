import React, { useEffect, useState } from 'react';
import SingleProjects from '../SingleProjects/SingleProjects';

const Projects = () => {
    const [projects, setProjects] = useState([])

    // local data fetch
    useEffect(() => {
        fetch("./homeServicesData.json")
            .then((res) => res.json())
            .then((data) => setProjects(data));
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
                            projects.map(sp => <SingleProjects key={sp.id} homeservice={sp}></SingleProjects>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;