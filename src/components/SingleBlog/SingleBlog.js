import React from 'react';

const SingleBlog = (props) => {
    const { name, description } = props.blogs;
    return (
        <div>
            <h2 className="fs-3">{name}</h2>
            <p className="text-muted">{description}</p>
        </div>
    );
};

export default SingleBlog;