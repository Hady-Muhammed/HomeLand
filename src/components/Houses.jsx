import React, { useEffect, useState } from "react";
import PlaceDD from "./PlaceDD";
import PriceDD from "./PriceDD";
import PropertyDD from "./PropertyDD";
import { BsSearch } from "react-icons/bs";
import HouseCard from "./HouseCard";
import { housesData } from "../data";
import { Link } from "react-router-dom";
import Loader from "./Loader";
import { useDispatch, useSelector } from "react-redux";
import {SET_ISLOADING} from '../redux/slices/loadSlice'
import { useRef } from "react";

const Houses = () => {
  const h = useRef(null);
  const dispatch = useDispatch();
  // Import Global States
  const price = useSelector(state => state.filter.price);
  const country = useSelector(state => state.filter.country);
  const type = useSelector(state => state.filter.type);
  const isLoading = useSelector(state => state.load.isLoading);
  // Changing States when Clicking on searcg
  const [houses , setHouses] = useState(housesData)
  const [pricee , setPricee] = useState(price)
  const [countryy , setCountryy] = useState(country)
  const [typee , setTypee] = useState(type)
  //filterSearch Function 
  const filterSearch = (e) => {
    e.preventDefault();
    dispatch(SET_ISLOADING(true))
    setTimeout(() => {
      dispatch(SET_ISLOADING(false))
    },500)
    setPricee(price);
    setCountryy(country);
    setTypee(type);
  }
  useEffect(() => {
    dispatch(SET_ISLOADING(true))
    setTimeout(() => {
      dispatch(SET_ISLOADING(false))
    },1000)
  }, [])
  
  return (
  
      <div className="mt-5">
        <form
          action=""
          className="p-5 flex md:flex-row xs:flex-col w-[90%] bg-white xs:space-x-0 md:space-x-4 mx-auto shadow-lg"
        >
          <PlaceDD />
          <PropertyDD />
          <PriceDD />
          <button className="btn-primary px-10 py-5 flex justify-center items-center" onClick={filterSearch}>
            <BsSearch />
          </button>
        </form>

        <div href={h} className={`${isLoading ? 'flex justify-center items-center' : 'grid md:grid-cols-2 lg:grid-cols-3 gap-10'} mt-10 w-[90%] mx-auto`}>
          {
            isLoading ?
            <Loader/>
            :
            houses.map((house) => (
              // WHEN EVERYTHING IS CHANGED TO ALL (DEFAULT)
              countryy === "ALL" && pricee === "ALL" && typee === "ALL" ? 
                <Link to={`/HomeLand/property/${house.id}`} key={house.id}>
                  <HouseCard  house={house}/>
                </Link>
              :
              // WHEN EVERYTHING IS CHANGED DIFFERENTLY
              house.country === countryy && house.type === typee && ( house.price >= +(pricee.split('-')[0]) && house.price <= +(pricee.split('-')[1]) ) ?
                <Link to={`/HomeLand/property/${house.id}`} key={house.id}>
                  <HouseCard house={house}/> 
                </Link>
              :
              // WHEN TYPE AND PRICE IS CHANGED BUT COUNTRY IS 'ALL'
              countryy === "ALL" && house.type === typee && ( house.price >= +(pricee.split('-')[0]) && house.price <= +(pricee.split('-')[1]) ) ?
                <Link to={`/HomeLand/property/${house.id}`} key={house.id}>
                  <HouseCard house={house}/> 
                </Link>
              :
              // WHEN COUNTRY AND PRICE IS CHANGED BUT TYPE IS 'ALL' 
              house.country === countryy && typee === "ALL" && ( house.price >= +(pricee.split('-')[0]) && house.price <= +(pricee.split('-')[1]) ) ?
                <Link to={`/HomeLand/property/${house.id}`} key={house.id}>
                  <HouseCard house={house}/> 
                </Link>
              :
              // WHEN COUNTRY AND TYPE IS CHANGED BUT PRICE IS 'ALL'
              house.country === countryy && house.type === typee && pricee === "ALL" ?
                <Link to={`/HomeLand/property/${house.id}`} key={house.id}>
                  <HouseCard house={house}/> 
                </Link>
              :
              // WHEN COUNTRY IS CHANGED BUT PRICE AND TYPE ARE 'ALL'
              house.country === countryy && typee === "ALL" && pricee === "ALL" ?
                <Link to={`/HomeLand/property/${house.id}`} key={house.id}>
                  <HouseCard house={house}/> 
                </Link>
              :
              // WHEN TYPE IS CHANGED BUT PRICE AND COUNTRY ARE 'ALL'
              countryy === "ALL" && house.type === typee && pricee === "ALL" ?
                <Link to={`/HomeLand/property/${house.id}`} key={house.id}>
                  <HouseCard house={house}/> 
                </Link>
              :
              // WHEN PRICE IS CHANGED BUT TYPE AND COUNTRY ARE 'ALL'
              countryy === "ALL" && typee === "ALL" && ( house.price >= +(pricee.split('-')[0]) && house.price <= +(pricee.split('-')[1]) ) ?
                <Link to={`/HomeLand/property/${house.id}`} key={house.id}>
                  <HouseCard house={house}/> 
                </Link>
              :
              <></>
            ) 
            )
          }
        </div>
      </div>
  );
};

export default Houses;
