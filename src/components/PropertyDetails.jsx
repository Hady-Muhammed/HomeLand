import React from 'react'
import { useParams } from 'react-router-dom'
import { housesData } from '../data';
import { BiBed, BiBath } from "react-icons/bi";
import { FaRulerCombined } from "react-icons/fa";

const PropertyDetails = () => {
  const {id} = useParams();
  const {price , address , type , country , imageLg , bedrooms , bathrooms , surface , agent} = housesData[id - 1];
  return (
    <main className='xs:p-10 lg:p-20 flex xs:flex-col lg:flex-row space-x-5'>
      <div>
        <h1 className='font-bold text-2xl'>House {id}</h1>
        <div className="flex items-center justify-between">
          <p className='text-slate-500'>{address}</p>
          <div className="flex my-4">
            <span className="text-white bg-green-600 px-2 py-0 rounded-full mr-1">
              {type}
            </span>
            <span className="btn-primary px-2 py-0 rounded-full">{country}</span>
          </div>
        </div>
        <img className='w-full object-cover' src={imageLg} alt={`house + ${id}`} />
        <div className="flex space-x-8 my-4 text-gray-500">
          <div className='text-purple-800'>
            <BiBed size={20} className="inline-block" /> {bedrooms}
          </div>
          <div className='text-purple-800'>
            <BiBath size={20} className="inline-block" /> {bathrooms}
          </div>
          <div className='text-purple-800'>
            <FaRulerCombined size={20} className="inline-block" /> {surface}
          </div>
        </div>
        <p className='text-slate-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate voluptas maiores quam repudiandae harum et quibusdam alias id blanditiis! Optio laboriosam suscipit nihil sequi facere aperiam facilis culpa, omnis explicabo. Lorem ipsum dolor sit amet consectetur adipisicing.</p>
      </div>

      <div>
        <div className='flex justify-end'>
          <span className='text-purple-800 text-3xl font-semibold mb-12'>{price}$</span>  
        </div>
        <form className='border xs:p-2 lg:p-5 space-y-5' action="">
          <div className='flex items-center'>
            <img className='rounded-full w-[70px] h-[70px]' src={agent.image} alt={agent.name} />
            <div className='p-5'>
              <p className='font-bold text-lg whitespace-nowrap'>{agent.name}</p>
              <span className='cursor-pointer text-slate-500'>View Listings</span>
            </div>
          </div>
          <div className='space-y-4'>
            <input required placeholder='Name*' className='w-full  py-2 focus:invalid:border-red-500 text-purple-800 p-1 border outline-none' type="text" name="" id="" />
            <input required placeholder='Email*' className='w-full py-2 focus:invalid:border-red-500 text-purple-800 p-1 border outline-none' type="email" name="" id="" />
            <input required placeholder='Phone*' className='w-full py-2 focus:invalid:border-red-500 text-purple-800 p-1 border outline-none' type="number" name="" id="" />
            <textarea className='p-1 border outline-none w-full  text-purple-800' name="" id="" cols="30" rows="10" placeholder='Hello, I am interested in [Modern apartment]' ></textarea>
            <div className='flex whitespace-nowrap justify-between'>
              <button className='btn-primary mr-1'>Send Message</button>
              <button type='button' className='border border-black p-2 xs:px-4 sm:px-12 rounded-md hover:bg-black/20 duration-300'>Call</button>
            </div>
          </div>
        </form>
      </div>
    </main>
  )
}

export default PropertyDetails