import React, { useState } from 'react';
import Toys from '../../components/Toys/Toys';
import { useLoaderData } from 'react-router-dom';
import Pagination from '../../components/Pagination/Pagination';

const AllToys = () => {
    
    const alltoys = useLoaderData()

    return (
        <section className="addtoy">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold text-center my-4">All Toys</h2>
        <div className="toyadd grid grid-cols-4 mx-auto gap-y-4 py-8 rounded-lg">
          {alltoys.map(toys => <Toys key={toys._id} toys={toys}></Toys>)}
        </div>
      </div>
      <Pagination></Pagination>
    </section>
    );
};

export default AllToys;