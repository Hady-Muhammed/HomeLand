import React , {useState} from 'react'
import {MdLocationPin} from 'react-icons/md'
import {IoChevronDownOutline , IoChevronUpOutline} from 'react-icons/io5'
import { useDispatch, useSelector } from 'react-redux';
import { SET_COUNTRY } from '../redux/slices/filterSlice';

const PlaceDD = () => {
  const [clicked, setClicked] = useState(false);
  const dispatch = useDispatch();
  // Importing Global States
  const country  = useSelector(state => state.filter.country);
  // Functions
    const handleLocation = ({target}) => {
      dispatch(SET_COUNTRY(target.innerText));
    }
  return (
    <div className='relative border-2 p-3 xs:w-full md:w-[27%] flex items-center justify-around cursor-pointer' onClick={() => setClicked(!clicked)}>
        <MdLocationPin className='text-purple-800' size={20}/>
        <div className='text-sm'>
            <p className='font-medium'>{country}</p>
            <p>Select your place</p>
        </div>
        {
            clicked ? (<IoChevronUpOutline/>)  : (<IoChevronDownOutline/>)
        }
            <ul className={`${clicked ? 'opacity-1 pointer-events-auto' : 'opacity-0 pointer-events-none'} duration-300 absolute w-full h-fit flex-col justify-between rounded-md bg-white top-[120%] z-10`}>
                <li onClick={handleLocation} className='p-4 hover:text-black/30 duration-150'>ALL</li>
                <li onClick={handleLocation} className='p-4 hover:text-black/30 duration-150'>United States</li>
                <li onClick={handleLocation} className='p-4 hover:text-black/30 duration-150'>Canada</li>
            </ul>
    </div>
  )
}

export default PlaceDD