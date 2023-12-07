import React, { useContext, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
import CreatableSelect from "react-select/creatable";
import Swal from 'sweetalert2';

const UpdateToy = () => {
    const userToys = useLoaderData()

    const {name , _id, weight, height, category, type, company, meterial, date, gender, model, stock, colors, description, image}= userToys;
    const {user}= useContext(AuthContext)

    const [color, setColor] = useState(null)

const updateToyinfos =(event)=>{
    const colors = color;
    event.preventDefault() 
        event.colors = colors;
        const from = event.target;
        const name =from.name.value;
        const price= from.price.value;
        const weight= from.weight.value;
        const height= from.height.value;
        const category= from.category.value;
        const type= from.type.value;
        const company= from.company.value;
        const meterial= from.meterial.value;
        const date= from.date.value;
        const gender= from.gender.value;
        const model= from.model.value;
        const stock= from.stock.value;
        const email = from.email.value;

        const valuinfo ={ email, name, price, weight, height, category, type, company, meterial, date, gender, model, stock, colors}
        fetch(`https://toymoy-server-szgpselfd-rbriyad2gmailcoms-projects.vercel.app/toys/${_id}`,{
            method: 'PUT',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(valuinfo)
        })
        .then(res => res.json())
        .then(data => {
            if(data.success === true){
                Swal.fire({
                    title: 'Success!',
                    text: 'Toys Update Succesfully',
                    icon: 'success',
                    confirmButtonText: 'Ok'
                  })
            }
        })
    }

    const options = [
        { value: "Black", label: "Black" },
        { value: "Red", label: "Red" },
        { value: "White", label: "White" },
        { value: "Green", label: "Green" },
        { value: "Yellow", label: "Yellow" },
        { value: "Pink", label: "Pink" },
        { value: "Vilote", label: "Vilote" },
        { value: "Orange", label: "Orange" },
      ];
    return (
        <section className="addtoy">
      <div className="container mx-auto">
        <div className="toyadd  px-20 pt-12 pb-40 rounded-lg">
          
        <form onSubmit={updateToyinfos} className="text-center">
            <h2 className="text-2xl font-bold text-center mb-8">
              Update a Toy: <span className='text-green-900'>{name}</span>
            </h2>
            <div className='w-full flex justify-evenly mb-5'>
                <label htmlFor="name">Toy Name: </label>
                <input placeholder='Toy Name' name='name' defaultValue={userToys?.name} className='px-4 py-2 w-10/12 ml-2 rounded' type="text" />
            </div>
            <div className="flex">
                <div className='w-1/3'>
                    <div className="w-full mb-4 flex justify-end">
                        <label htmlFor="price">Price:</label>
                        <input placeholder='Price' name='price' defaultValue={userToys?.price} className='px-4 py-2 rounded w-9/12 ml-3' type="number" />
                    </div>
                    <div className="w-full mb-4 flex justify-end">
                        <label htmlFor="weight">Weight: </label>
                        <input placeholder='Weight' name='weight' defaultValue={userToys?.weight} className='px-4 py-2 rounded w-9/12 ml-3' type="text" />
                    </div>
                    <div className="w-full mb-4 flex justify-end">
                        <label htmlFor="height">Height:</label>
                        <input placeholder='Height' defaultValue={userToys?.height} name='height' className='px-4 py-2 rounded w-9/12 ml-3' type="text" />
                    </div>
                    <div className="w-full mb-4 flex justify-end">
                        <label htmlFor="category">Category:</label>
                        <select name='category' className="px-4 py-2 rounded w-9/12 ml-3">
                            <option value="Electric">Electric</option>
                            <option value="Games">Games</option>
                            <option value="Plastic">Plastic</option>
                            <option value="Paints">Paints</option>
                        </select>
                    </div>
                </div>
                <div className='w-1/3'>
                    <div className="w-full mb-4 flex justify-end">
                        <label htmlFor="color">Color:</label>
                        <CreatableSelect onChange={setColor} className='rounded w-9/12 ml-3' type="text" options={options} isMulti />
                    </div>
                    <div className="w-full mb-4 flex justify-end">
                        <label htmlFor="type">Type: </label>
                        <input placeholder='toy type' defaultValue={userToys?.type} className='px-4 py-2 rounded w-9/12 ml-3' name='type' type="text" />
                    </div>
                    <div className="w-full mb-4 flex justify-end">
                        <label htmlFor="company">Company: </label>
                        <input placeholder='Company Name' defaultValue={userToys?.company} name='company' className='px-4 py-2 rounded w-9/12 ml-3' type="text" />
                    </div>
                    <div className="w-full mb-4 flex justify-end">
                        <label htmlFor="meterial">Material: </label>
                        <input placeholder='Material Type' defaultValue={userToys?.meterial} name='meterial' className='px-4 py-2 rounded w-9/12 ml-3' type="text" />
                    </div>
                </div>
                <div className='w-1/3'>
                    <div className="w-full mb-4 flex justify-end">
                        <label htmlFor="date">Release: </label>
                        <input className='px-4 py-2 rounded  ml-3' defaultValue={userToys?.defaultValue} name='date' type="date" />
                    </div>
                    <div className="w-full mb-4 flex justify-end">
                        <label htmlFor="gender">Gender: </label>
                        <select name='gender' className=" px-4 py-2 rounded w-9/12 ml-3">
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Both">Both</option>
                        </select>
                    </div>
                    <div className="w-full mb-4 flex justify-end">
                        <label htmlFor="model">Model: </label>
                        <input placeholder='Model Number' name='model' defaultValue={userToys?.model} className='px-4 py-2 rounded w-9/12 ml-3' type="text" />
                    </div>
                    <div className=" w-full mb-4 flex justify-end">
                        <label htmlFor="stock">Stock: </label>
                        <select name='stock' className="  px-4 py-2 rounded w-9/12 ml-3">
                            <option value="Avilable">Avilable</option>
                            <option value="Stock Out">Stock Out</option>
                        </select>
                    </div>
                </div>
            </div>
            <div>
                <div className="text-xl font-normal mb-4 w-full">
                    <label htmlFor="description">Toy Description: </label>
                    <textarea placeholder='Toy Decription here...' defaultValue={userToys?.description} className="rounded px-3 py-3 mt-2 w-full" type="text" name="description" />
                </div>
                <div className="email text-xl font-normal mb-4 w-full">
                    <label htmlFor="image">Image Link: </label>
                    <input placeholder='Image URL' className="rounded px-3 py-3 mt-2 w-11/12" defaultValue={userToys?.image} type="text" name="image" />
                </div>
                <div className="email text-xl font-bold mb-4 w-full">
                      <label htmlFor="email">Your Email: </label>
                      <input value={user?.email} de className="rounded px-3 py-3 mt-2 w-1/4" type="text" name="email" />
                  </div>
            </div>
            <div className="loginbutton text-center">
              <input value='Update Toy Info'  className="cursor-pointer loginbtn px-20 text-xl font-semibold" type="submit"/>
            </div>
          </form>
          <button className='bg-orange-500 text-gray-300 font-bold hover:bg-orange-950 transition-all rounded-lg px-5 py-2'><Link to='/mytoys'>Back My Toy List</Link></button>
        </div>
        
      </div>
    </section>
    );
};

export default UpdateToy;