import React from 'react';
import { Link } from 'react-router-dom';


const Mytoylist = ({toylist,handleDelete, index}) => {
    const {name, category, date, image, _id}=toylist;

    return (
<>
<tbody>
    <tr className="hover gap-y-2">
        <td>{index +1}</td>
        <td><img className='w-14' src={image} alt="" /></td>
        <td>{name.slice(0,40)}</td>
        <td>{_id}</td>
        <td>{category}</td>
        <td>{date}</td>
        <td><Link to={`/update/${_id}`}>Update</Link></td>
        <td><button onClick={()=>handleDelete(_id)}>Delete</button></td>
    </tr>
    </tbody>
</>

    );
};

export default Mytoylist;