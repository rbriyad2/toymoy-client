import React from 'react';
import { Link } from 'react-router-dom';

const MyAllPostList = ({postlist, deleteMyPost, index}) => {
                const {title ,category, date, PostImage, _id}=postlist;
    return (     
        <>
        <tbody>
            <tr className="hover">
                <td>{index +1}</td>
                <td><img style={{width: '80px', height: '50px'}} src={PostImage} alt="" /></td>
                <td>{title.slice(0,40)}</td>
                <td>{_id}</td>
                <td>{category}</td>
                <td>{date}</td>
                <td><Link to={`/updatepost/${_id}`}>Update</Link></td>
                <td><button onClick={()=>deleteMyPost(_id)}>Delete</button></td>
            </tr>
            </tbody>
        </>
    );
};

export default MyAllPostList;