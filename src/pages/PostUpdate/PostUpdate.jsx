import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import { Link, useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const PostUpdate = () => {
const {user} = useContext(AuthContext)
const loadedPost = useLoaderData();
const {title, author, description, paragraph1, paragraph2, Conclusion, date, PostImage, _id} = loadedPost;
    const updatePost =(event) =>{ 
        event.preventDefault()
            const from = event.target;
            const title = from.title.value;
            const category = from.category.value;
            const author = from.author.value;
            const date = from.date.value;
            const description = from.description.value;
            const paragraph1 = from.paragraph1.value;
            const paragraph2 = from.paragraph1.value;
            const Conclusion = from.Conclusion.value;
            const PostImage = from.image.value;
            const email = from.email.value;
    
            const posts ={ title, author, description, category, paragraph1, paragraph2, Conclusion, date, PostImage, email}
            console.log(posts);

            fetch(`https://toymoy-server-szgpselfd-rbriyad2gmailcoms-projects.vercel.app/myposts/${_id}`,{
            method: 'PUT',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(posts)
        })
        .then(res => res.json())
        .then(data => {
            if(data.success === true){
                Swal.fire({
                    title: 'Success!',
                    text: 'Post Update Succesfully',
                    icon: 'success',
                    confirmButtonText: 'Ok'
                  })
            }
        })
    }
    return (
        <section className="addtoy">
        <div className="container mx-auto">
          
          <div className="toyadd  px-20 pt-12 pb-40 rounded-lg">
            <form onSubmit={updatePost} className="text-center">
              <h2 className="text-2xl font-bold text-center mb-8">
                Update The Post: <span className='text-orange-950'>{title}</span>
              </h2>
              <div className='w-full flex justify-evenly mb-5'>
                  <label htmlFor="title">Post Title: </label>
                  <input placeholder='Post Title' defaultValue={title} name='title' className='px-4 py-2 w-10/12 ml-2 rounded' type="text" />
              </div>
              <div className="flex">
                  <div className='w-1/3'>
  
                  <div className="w-full mb-4 flex justify-end">
                          <label htmlFor="category">Category: </label>
                          <select name='category' className=" w-9/12 px-4 py-2 rounded ml-3">
                              <option value="Sports">Sports</option>
                              <option value="Politics">Politics</option>
                              <option value="World">World</option>
                              <option value="Technology">Technology</option>
                          </select>
                      </div>
  
  
                  </div>
                  <div className='w-1/3'>
  
  
                      <div className="w-full mb-4 flex justify-end">
                          <label htmlFor="author">Author Name: </label>
                          <input placeholder='Author Name' defaultValue={author} name='author' className='px-4 py-2 rounded w-9/12 ml-3' type="text" />
                      </div>
  
                  </div>
                  <div className='w-1/3'>
                      <div className="w-full mb-4 flex justify-end">
                          <label htmlFor="date">Release: </label>
                          <input className='px-4 py-2 rounded w-9/12 ml-3' defaultValue={date} name='date' type="date" />
                      </div>
                      
     
                      
                  </div>
              </div>
              <div>
                  <div className="text-xl font-normal mb-4 w-full">
                      <label htmlFor="description">Toy Description: </label>
                      <textarea placeholder='Toy Decription here...' defaultValue={description} className="rounded px-3 py-3 mt-2 w-full" type="text" name="description" />
                  </div>
                  <div className="text-xl font-normal mb-4 w-full">
                      <label htmlFor="paragraph1">Paragraph 1: </label>
                      <textarea placeholder='Paragraph here...' defaultValue={paragraph1} className="rounded px-3 py-3 mt-2 w-full" type="text" name="paragraph1" />
                  </div>
                  <div className="text-xl font-normal mb-4 w-full">
                      <label htmlFor="paragraph2">Paragraph 2: </label>
                      <textarea placeholder='Paragraph here...' defaultValue={paragraph2} className="rounded px-3 py-3 mt-2 w-full" type="text" name="paragraph2" />
                  </div>
                  <div className="text-xl font-normal mb-4 w-full">
                      <label htmlFor="Conclusion">Conclusion: </label>
                      <textarea placeholder='Conclusion here...' defaultValue={Conclusion} className="rounded px-3 py-3 mt-2 w-full" type="text" name="Conclusion" />
                  </div>
                  <div className="email text-xl font-normal mb-4 w-full">
                      <label htmlFor="image">Image Link: </label>
                      <input placeholder='Image URL' defaultValue={PostImage} className="rounded px-3 py-3 mt-2 w-11/12" type="text" name="image" />
                  </div>
              </div>
  
              <div className="email text-xl font-bold mb-4 w-full">
                      <label htmlFor="email">Your Email: </label>
                      <input value={user?.email} de className="rounded px-3 py-3 mt-2 w-1/4" type="text" name="email" />
                  </div>
  
              <div className="loginbutton text-center">
                <input value='Update Post' className="cursor-pointer loginbtn px-20 text-xl font-semibold" type="submit"/>
              </div>
            </form>
  
            <button className='bg-orange-500 text-gray-300 font-bold hover:bg-orange-950 transition-all rounded-lg px-5 py-2'><Link to='/myposts'>Back My Posts List</Link></button>
          </div>
        </div>
      </section>
    );
};

export default PostUpdate;