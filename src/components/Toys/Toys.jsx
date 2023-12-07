import React from "react";

const Toys = ({toys}) => {
  const {name, price, weight, height, category, type, company, meterial, date, gender, model, stock, colors, image}= toys

  return (
    <div className="overflow-x-auto mx-auto">
            <div className="card w-80 bg-base-100 shadow-xl">
              <figure className="px-10 pt-10">
                <img src={image} alt="Shoes" className="rounded-xl" />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
              </div>
            </div>
          </div>
  );
};

export default Toys;
