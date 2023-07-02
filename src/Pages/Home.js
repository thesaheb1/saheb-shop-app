import React  from 'react'
import HomeProducts from "../Components/HomeProducts";
import { useState,useEffect } from 'react';
import Spinner from '../Components/Spinner';
const url = "https://fakestoreapi.com/products";


const Home = ({isLoggedIn}) => {
  const [products,setProducts] = useState([]);
  const [loading,setLoading] = useState(false);
  const fetchData = async () => {
    setLoading(true);
    const res = await fetch(url)
    const data = await res.json()
    setProducts(data);
    setLoading(false);
  }
  useEffect(()=>{
    fetchData();
  },[]);

  return (
    <div className='w-full  min-h-[80vh] mt-10 md:mt-[80px] xl:w-[1152px] bg-[#FF0060] flex flex-wrap justify-center items-center gap-8 mx-auto py-12'> 
     {loading ?(<Spinner/>): (products.length > 0 ? 
      products.map((data)=>
      <HomeProducts key = {data.id} data= {data} isLoggedIn={isLoggedIn}/>)
     :
     <div><h1 className='text-4xl'>No Data Found</h1></div>)} 
    </div>
  )
}

export default Home;