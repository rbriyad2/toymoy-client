import React, { useContext, useEffect, useState } from "react";
import "./MyToys.css";
import Mytoylist from "../../components/Mytoylist/Mytoylist";
import Swal from "sweetalert2";
import { AuthContext } from "../../provider/AuthProvider";
import { useNavigate } from "react-router-dom";

const MyToys = () => {

  const [toylists, setToylists] =useState([])
  const {user} = useContext(AuthContext)
  const navigate = useNavigate()

  const url=`https://toymoy-server-szgpselfd-rbriyad2gmailcoms-projects.vercel.app/toys?email=${user?.email}`
  useEffect(()=> {
    fetch(url ,{
      method: 'GET',
      headers: {
        authorization: `Bearer ${localStorage.getItem('toy-access-token')}`
      }
    })
    .then(res => res.json())
    .then(data => {
      if(!data.error){
        setToylists(data)
      }
      else{
        navigate('/')
      }
    })
  },[url, navigate])
  const handleDelete =(id)=>{

    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      })
      .then((result) => {

        if (result.isConfirmed) {
            fetch(`https://toymoy-server-szgpselfd-rbriyad2gmailcoms-projects.vercel.app/toys/${id}`,{
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
               console.log(data); 
                if(data.deletedCount > 0){
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your Toy has been deleted.",
                        icon: "success"
                      });
                }
            })
        }
      });
}

  return (
    <section className="addtoy">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold text-center my-4">My All Toys</h2>
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
              {toylists.length > 0 ? toylists.map((toylist, index) => <Mytoylist index={index} handleDelete={handleDelete} key={toylist._id} toylist={toylist} ></Mytoylist>) : ''}
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyToys;
