import React, { useContext, useState } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import logo from '../.././assets/img/logo.png';
import { FaUserCircle } from "react-icons/fa";
import { AuthContext } from '../../provider/AuthProvider';

const Header = () => {
    const {user, logOut}= useContext(AuthContext)
    const [userinfo, setUserinfo] = useState(false)

    const handleLogout =()=>{
        logOut()
        .then(() => {
            
          }).catch((error) => {
           console.log(error);
          });
    }

    const shoUserInfo =()=>{
        if(userinfo === true){
            setUserinfo(false)
        }
        else{
            setUserinfo(true)
        }
        
    }


  
    return (
        <header>
            <div className="container mx-auto">
                <div className="header-item flex justify-between py-2 items-center">
                    <Link to='/'><img src={logo} alt="" /></Link>
                    
                    <ul  className='flex gap-4 text-2xl font-semibold'>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/alltoys'>All Toys</Link></li>
                        <li><Link to='/mytoys'>My Toys</Link></li>
                        <li><Link to='/addtoy'>Add Toy</Link></li>
                        <li><Link to='/blogs'>Blogs</Link></li>
                    </ul>
                    
                    
                    <div>
                    <div className='flex'>
                    <div className="login mr-4">
                        {user ? <p onClick={handleLogout} className='text-xl cursor-pointer font-medium'>Logout</p>: <Link className='text-xl font-medium cursor-pointer' to ='/login'>Login</Link>}
                    </div>
                    <div onClick={shoUserInfo} className="user cursor-pointer">
                        <FaUserCircle className='text-3xl' />
                    </div>
                    
                
                    </div>
               {!user ? '':     <div className={userinfo === true ? 'userinfo gradient-border-mask fixed z-50' : 'hidden'}>
                        <div className="userderails text-left px-5">
                            <FaUserCircle className='text-5xl mx-auto' />
                            {
                            user.DisplayName ? <h4 className='text-xl text-center font-bold mt-3'>Name: {user?.displayName}</h4> : 
                            <h4 className='text-xl font-bold text-center mt-3'>Email: {user?.email}</h4>
                            }
                            <p className='text-lg text-center font-normal mb-3'>User ID: {user?.uid.slice(22)}</p>
                            <button className='cursor-pointer py-2 px-3 text-white bg-green-950 rounded-lg hover:bg-orange-600'><Link to='/mytoys'>View Profile </Link></button>
                            <h6 className='text-lg font-bold mt-3 hover:text-red-700'> <Link to='/mytoys'>My Toys </Link></h6>
                            <h6 className='text-lg font-bold hover:text-red-700'> <Link to='/addtoy'>Add Toy  </Link></h6>
                            <h6 className='text-lg font-bold hover:text-red-700'><Link to='/addpost'>Add Post</Link> </h6>
                            <h6 className='text-lg font-bold hover:text-red-700'><Link to='/myposts'>My Post</Link> </h6>
                            <button onClick={handleLogout} className='cursor-pointer mt-4 py-2 px-3 text-white bg-green-950 rounded-lg hover:bg-red-700'>Logout</button>
                        </div>
    
                    </div>
                }
                   
                    </div>
                </div>
            </div>
            
       
        </header>
    );
};

export default Header;