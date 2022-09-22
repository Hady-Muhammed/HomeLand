import React , {useState} from 'react'
import {BsHouseDoor} from 'react-icons/bs'
import {IoChevronDownOutline , IoChevronUpOutline} from 'react-icons/io5'
import { useDispatch, useSelector } from 'react-redux';
import { SET_TYPE } from '../redux/slices/filterSlice';

const PropertyDD = () => {
  const [clicked, setClicked] = useState(false);
  const dispatch = useDispatch();
  // Importing Global States
  const type = useSelector(state => state.filter.type);
  // Functions
    const handleProperty = ({target}) => {
      dispatch(SET_TYPE(target.innerText));
    }
  return (
    <div className='relative border-2 p-3 xs:w-full md:w-[27%] flex items-center justify-around cursor-pointer' onClick={() => setClicked(!clicked)}>
        <BsHouseDoor className='text-purple-800' size={20}/>
        <div className='text-sm'>
            <p className='font-medium'>{type}</p>
            <p>Choose Property type</p>
        </div>
        {
            clicked ? (<IoChevronUpOutline/>)  : (<IoChevronDownOutline/>)
        }
            <ul className={`${clicked ? 'opacity-1 pointer-events-auto' : 'opacity-0 pointer-events-none'} duration-300 absolute w-full h-fit flex-col justify-between rounded-md bg-white top-[120%] z-10`}>
                <li onClick={handleProperty} className='p-4 hover:text-black/30 duration-150'>ALL</li>
                <li onClick={handleProperty} className='p-4 hover:text-black/30 duration-150'>House</li>
                <li onClick={handleProperty} className='p-4 hover:text-black/30 duration-150'>Apartment</li>
            </ul>
    </div>
  )
}

export default PropertyDD

