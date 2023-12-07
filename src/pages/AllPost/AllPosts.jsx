import React from 'react';

const AllPosts = ({post}) => {
    const {title, paragraph1, PostImage}= post;
    return (
        <div className="overflow-x-auto mx-auto bg-base-100 my-11 rounded-lg">
        <div className="card w-80">
          <figure className="px-10 pt-10">
            <img
              src={PostImage}
              alt="Shoes"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">{title}</h2>
            <p>{paragraph1}</p>
          </div>
        </div>
      </div>
    );
};

export default AllPosts;