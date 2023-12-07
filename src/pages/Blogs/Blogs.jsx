import React from "react";
import AllPosts from "../AllPost/AllPosts";
import { useLoaderData } from "react-router-dom";

const Blogs = () => {
  const posts = useLoaderData()

  return (
    <section className="addtoy ">
      <h2 className="font-bold text-3xl text-center my-4">Our Latest Blogs</h2>
      <div className="container mx-auto">
        <div className="toyadd grid grid-cols-4 mx-auto gap-y-4 rounded-lg">
        {posts.map(post => <AllPosts key={post._id} post={post}></AllPosts>)}
        </div>
        
      </div>
    </section>
  );
};

export default Blogs;
