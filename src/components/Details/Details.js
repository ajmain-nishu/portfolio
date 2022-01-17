import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Details = () => {
    const { detailsId } = useParams()
    const [singleProject, setSingelProjects] = useState([])

    // local fake data fetch
    useEffect(() => {
        const url = "/homeServicesData.json"
        fetch(url)
            .then(res => res.json())
            .then(data => {
                let searchId = data.filter((singledata) => singledata.id === detailsId);
                setSingelProjects(searchId)

            })
    }, [detailsId])
    return (
        <div>
            {
                singleProject.map(singleService => (
                    <div>
                        <div className="container">
                            <div className="text-center p-5">

                                {/* image part */}
                                <div className="row">
                                    <div className="col-md-4 col-12">
                                        <img className="w-100 p-1 bg-black rounded" src={singleService.img} alt="" />
                                    </div>
                                    <div className="col-md-4 col-12">
                                        <img className="w-100 p-1 bg-black rounded" src={singleService.img_1} alt="" />
                                    </div>
                                    <div className="col-md-4 col-12">
                                        <img className="w-100 p-1 bg-black rounded" src={singleService.img_2} alt="" />
                                    </div>
                                    
                                </div>

                                {/* text part */}
                                <h3 key={singleService.id} className="py-2">Name: {singleService.name}</h3>
                                <h3 className="text-decoration-underline">Description</h3>
                                <p className="text-muted">{singleService.description}</p>
                                <h3 className="text-decoration-underline">Usages Purpose</h3>
                                <p className="text-muted">{singleService.purpose}</p>
                                <h4>Technologies Used: {singleService.tech}</h4>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default Details;