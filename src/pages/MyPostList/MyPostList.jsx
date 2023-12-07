import React, { useContext, useEffect, useState } from "react";
import MyAllPostList from "../../components/MyAllPostList/MyAllPostList";
import Swal from "sweetalert2";
import { AuthContext } from "../../provider/AuthProvider";

const MyPostList = () => {
  const [postlists, setPostlists] = useState([]);
  const { user, setLoading } = useContext(AuthContext);
  const url = `https://toymoy-server-szgpselfd-rbriyad2gmailcoms-projects.vercel.app/myposts?email=${user.email}`;
  
useEffect(()=>{
  setLoading(false)
  fetch(url)
    .then((res) => res.json())
    .then((data) => setPostlists(data));
},[])

  const deleteMyPost = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://toymoy-server-szgpselfd-rbriyad2gmailcoms-projects.vercel.app/myposts/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((result) => {
            if (result.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your Post has been deleted.",
                icon: "success",
              });
            }
          });
      }
    });
  };
  return (
    <section className="addtoy">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold text-center my-4">My All Posts</h2>
        <div className="toyadd  px-20 pt-12 pb-40 rounded-lg">
          <div className="overflow-x-auto">
            <table className="table">
              <thead>
                <tr>
                  <th>SL</th>
                  <th>Image</th>
                  <th>Title</th>
                  <th>Post ID</th>
                  <th>Category</th>
                  <th>Date</th>
                  <th>Update</th>
                  <th>Delete</th>
                </tr>
              </thead>
              {postlists.length > 0 ? postlists.map((postlist, index) => (
                <MyAllPostList
                  index={index}
                  key={postlist._id}
                  deleteMyPost={deleteMyPost}
                  postlist={postlist}
                ></MyAllPostList>
              )) : ''}
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyPostList;
