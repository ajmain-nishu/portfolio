import React, { useEffect, useState } from 'react';
import SingleBlog from '../SingleBlog/SingleBlog';

const Blogs = () => {
    const [myBlogs, setMyBlogs] = useState([])

    // local data fetch
    useEffect(() => {
        fetch("./Blog.json")
            .then((res) => res.json())
            .then((data) => setMyBlogs(data));
    }, []);
    return (
        <div>
            <div className=" py-5">
            <h2 className="text-center display-4 fw-bold pt-1 pb-4 mt-2">Blogs</h2>
            <div className="container">
                <div className="col-12">
                    <div className="row pb-3">

                        {/* value pass in other component */}
                        {
                            myBlogs.map(blog => <SingleBlog key={blog.id} blogs={blog}></SingleBlog>)
                        }
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Blogs;