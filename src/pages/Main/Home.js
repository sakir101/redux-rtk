import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../../components/ProductCard";
import { useGetProductsQuery } from "../../features/api/apiSlice";

import { toggle, toggleBrands } from "../../features/feature/featureSlice";




const Home = () => {
  // const [products, setProducts] = useState([])
  const dispatch = useDispatch();
  
// useEffect(()=>{
//   fetch("http://localhost:5000/products")
//   .then(res=>res.json())
//   .then(data=> setProducts(data))
// }, [])

  

const {data, isLoading, isSuccess, isError, isFetching, error} = useGetProductsQuery()
// const {data, isLoading, isSuccess, isError, isFetching, error} = useGetProductsQuery(
//   null, 
//   {refetchOnMountOrArgChange: true}

//   )

const activeClass = "text-white  bg-indigo-500 border-white";



const products = data;

if(isLoading){
  return <p>Loading...</p>
}



if(isError){
  return <p>Something went wrong</p>
}
 

  return (
    <div className='max-w-7xl gap-14 mx-auto my-10'>
      <div className='mb-10 flex justify-end gap-5'>
        <button
          className={`border px-3 py-2 rounded-full font-semibold`}
          onClick={() => dispatch(toggle())}
        >
          In Stock
        </button>
        <button
          className={`border px-3 py-2 rounded-full font-semibold`}
          onClick={() => dispatch(toggleBrands("amd"))}
        >
          AMD
        </button>
        <button
          className={`border px-3 py-2 rounded-full font-semibold`}
          onClick={() => dispatch(toggleBrands("intel"))}
        >
          Intel
        </button>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14'>
       {
        products.map(product => <ProductCard key={product._id} product={product}></ProductCard>)
       }
      </div>
    </div>
  );
};

export default Home;
