import React from "react";
import ho from "../assets/h.jpg";
import { BiBed, BiBath } from "react-icons/bi";
import { FaRulerCombined } from "react-icons/fa";
const HouseCard = ({ house }) => {
  return (
    <div className="shadow-md p-4 hover:shadow-md duration-150 cursor-pointer hover:shadow-slate-500">
      <img
        src={house.image}
        alt="x"
        className="rounded-lg rounded-tl-[4em] rounded-br-[4em]"
      />
      <div className="flex my-4">
        <span className="text-white bg-green-600 px-2 py-0 rounded-full mr-1">
          {house.type}
        </span>
        <span className="btn-primary px-2 py-0 rounded-full">{house.country}</span>
      </div>
      <h2 className="font-bold text-md">
       {house.address}
      </h2>
      <div className="flex space-x-4 my-4 text-gray-500">
        <div>
          <BiBed size={15} className="inline-block" /> {house.bedrooms}
        </div>
        <div>
          <BiBath size={15} className="inline-block" /> {house.bathrooms}
        </div>
        <div>
          <FaRulerCombined size={15} className="inline-block" /> {house.surface}
        </div>
      </div>
      <div className="price font-medium text-purple-800 text-lg">{house.price}$</div>
    </div>
  );
};

export default HouseCard;
