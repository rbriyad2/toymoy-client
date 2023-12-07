import React from "react";
import "./Company.css";
import company1 from "../../../public/company/fig.png";
import company2 from "../../../public/company/mongodb.png";
import company3 from "../../../public/company/next.png";
import company4 from "../../../public/company/node.png";
import company5 from "../../../public/company/react.jpg";
import company6 from "../../../public/company/fiverr.jpg";
import company7 from "../../../public/company/google.jpg";
import company8 from "../../../public/company/daraz.png";
import company9 from "../../../public/company/amz.png";

const Company = () => {
  return (
    <div className="container">
      <div className="company my-11 flex justify-between">
        <div className="left">
          <h4 className="text-4xl font-bold">This is our Sponcer Company</h4>
          <p className="mb-4 mt-3 w-6/12">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga
            distinctio possimus, nam quas eaque praesentium recusandae provident
            quidem dignissimos cupiditate.
          </p>
          <button className="bg-orange-600 rounded-lg font-bold text-3xl py-4 px-3 text-fuchsia-50" to='/'>Learn More</button>
        </div>
        <div className="right grid grid-cols-4 gap-10">
          <img src={company1} alt="" />
          <img src={company2} alt="" />
          <img src={company3} alt="" />
          <img src={company4} alt="" />
          <img src={company5} alt="" />
          <img src={company6} alt="" />
          <img src={company7} alt="" />
          <img src={company8} alt="" />
          <img src={company9} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Company;
