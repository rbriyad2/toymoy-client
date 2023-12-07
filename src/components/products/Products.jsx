import React from 'react';
import './Products.css';
import Product from '../Product/Product';
import { useLoaderData } from 'react-router-dom';

const Products = () => {
const alltoys =useLoaderData()

    return (
        <section className='my-12'>
            <div className="container">
                <div className="flex flex-wrap gap-y-11 justify-between">
                   {alltoys.map(toy => <Product key={toy._id} toy={toy}></Product>)}
                </div>
            </div>
        </section>
    );
};

export default Products;