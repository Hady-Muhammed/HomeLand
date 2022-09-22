import React , {useState } from 'react'
import {BiWallet} from 'react-icons/bi'
import {IoChevronDownOutline , IoChevronUpOutline} from 'react-icons/io5'
import { useDispatch, useSelector } from 'react-redux';
import { SET_PRICE } from '../redux/slices/filterSlice';

const PriceDD = () => {
  const [clicked, setClicked] = useState(false);
  const dispatch = useDispatch();
  // Importing Global States
  const price = useSelector(state => state.filter.price);

    const handlePrice = ({target}) => {
      dispatch(SET_PRICE(target.innerText));
    }
  return (
    <div className='relative border-2 p-3 xs:w-full md:w-[27%] flex items-center justify-around cursor-pointer' onClick={() => setClicked(!clicked)}>
        <BiWallet className='text-purple-800' size={20}/>
        <div className='text-sm'>
            <p className='font-medium'>{price}</p>
            <p>Choose price range</p>
        </div>
        {
            clicked ? (<IoChevronUpOutline/>)  : (<IoChevronDownOutline/>)
        }
          <ul className={`${clicked ? 'opacity-1 pointer-events-auto' : 'opacity-0 pointer-events-none'} duration-300 absolute w-full h-fit flex-col justify-between rounded-md bg-white top-[120%]`}>
                <li onClick={handlePrice} className='p-4 hover:text-black/30 duration-150'>ALL</li>
                <li onClick={handlePrice} className='p-4 hover:text-black/30 duration-150'>100000 - 130000</li>
                <li onClick={handlePrice} className='p-4 hover:text-black/30 duration-150'>130000 - 160000</li>
                <li onClick={handlePrice} className='p-4 hover:text-black/30 duration-150'>160000 - 190000</li>
                <li onClick={handlePrice} className='p-4 hover:text-black/30 duration-150'>190000 - 220000</li>
                <li onClick={handlePrice} className='p-4 hover:text-black/30 duration-150'>220000 - 300000</li>
                <li onClick={handlePrice} className='p-4 hover:text-black/30 duration-150'>300000 - 400000</li>
          </ul>
    </div>
  )
}

export default PriceDD