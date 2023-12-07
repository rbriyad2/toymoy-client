import React, { useState } from "react";
import "./FbStotys.css";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import story1 from "../../../public/story/story1.jpg";
import story2 from "../../../public/story/story2.jpg";
import story3 from "../../../public/story/story3.jpg";
import story4 from "../../../public/story/story4.jpg";
import story5 from "../../../public/story/story5.jpg";
import story6 from "../../../public/story/story6.jpg";
import story7 from "../../../public/story/story7.jpg";
import story8 from "../../../public/story/story8.jpg";

const FbStotys = () => {
  // const [closeImage, setCloseImage]= useState(true)
  return (
  <section className="my-11">
    <div className="container relative mx-auto">
      <div  className="content"> 
        <div className="prevBtn left-8">
          <FaAngleLeft className="text-4xl" />
        </div>

        <div className="stories cursor-pointer flex gap-2">
          <div className="story">
            <img src={story1} alt="" />
            <div className="author">Author</div>
          </div>
          <div className="story">
            <img src={story2} alt="" />
            <div className="author">Author</div>
          </div>
          <div className="story">
            <img src={story3} alt="" />
            <div className="author">Author</div>
          </div>
          <div className="story">
            <img src={story4} alt="" />
            <div className="author">Author</div>
          </div>
          <div className="story">
            <img src={story5} alt="" />
            <div className="author">Ahmed</div>
          </div>
          <div className="story">
            <img src={story6} alt="" />
            <div className="author">Ali</div>
          </div>
          <div className="story">
            <img src={story7} alt="" />
            <div className="author">Khan</div>
          </div>
          <div className="story">
            <img src={story8} alt="" />
            <div className="author">Author</div>
          </div>
          <div className="story">
            <img src={story2} alt="" />
            <div className="author">Author</div>
          </div>
          <div className="story">
            <img src={story3} alt="" />
            <div className="author">Author</div>
          </div>
          <div className="story">
            <img src={story4} alt="" />
            <div className="author">Author</div>
          </div>
          <div className="story">
            <img src={story5} alt="" />
            <div className="author">Ahmed</div>
          </div>
          <div className="story">
            <img src={story6} alt="" />
            <div className="author">Ali</div>
          </div>
          <div className="story">
            <img src={story7} alt="" />
            <div className="author">Khan</div>
          </div>
        </div>

        <div className="nextBtn -right-3">
          <FaAngleRight className="text-4xl" />
        </div>
      </div>
    </div>
    {/* <div className={closeImage === true ? 'storesFullview' : 'hidden'}>
      <div className="closebtn">
      <IoMdClose onClick={()=>setCloseImage(false)} className="text-3xl" />
      </div>
      <div className="content">
      <div className="prevBtn left-8">
          <FaAngleLeft className="text-4xl" />
        </div>
      </div>
      <div className="story">
        <img src={story7} alt="" />
        <div className="authors"> Ahmed</div>
      </div>
      <div className="nextBtn -right-3">
          <FaAngleRight className="text-4xl" />
        </div>
    </div> */}
    </section>
  );
};

export default FbStotys;
