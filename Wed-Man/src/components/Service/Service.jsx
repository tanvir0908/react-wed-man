/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

export default function Service({ data }) {
  const { id, name, image, price, description } = data;
  return (
    <div>
      <div className="card bg-[#ffcbe5] shadow-xl py-6 px-6">
        <figure>
          <img
            className="hover:scale-105 hover:rounded-xl rounded-xl transition h-96 duration-500 "
            src={image}
            alt=""
          />
        </figure>
        <div className="mt-5">
          <h2 className="text-3xl font-semibold mb-3">{name}</h2>
          <p className="text-lg font-medium text-gray-500 mb-3">
            {description}
          </p>
          <p className="text-2xl font-medium text-gray-500 mb-3">
            Price: ${price}
          </p>
          <Link to={`/services/${id}`}>
            <button className="py-3 my-5 duration-300 w-full rounded-lg font-semibold text-lg bg-[#FF69B4] hover:bg-[#FF69B4] text-white hover:text-black">
              See Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
