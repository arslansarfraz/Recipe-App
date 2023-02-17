import React, {useState} from "react";
import {Link, useAsyncError} from "react-router-dom";
import useApi from "../Services/UseAPi";

export default function Popular() {
  const [pagination, setPagination] = useState(8);
  const getMore = () => {
    setPagination(pagNum => pagNum + 4);
  };

  const getPopular = useApi(
    `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=${pagination}`
  );
  return (
    <>
      <h4 className='font-bold mt-12 pb-2 border-b border-gray-200'>
        Most Popular
      </h4>
      <div className='mt-8 grid lg:grid-cols-4 gap-10'>
        {getPopular &&
          getPopular.map(res => (
            <Link to={"/recipe/" + res.id}>
              <div
                className='card h-80 rounded-xl bg-white shadow-lg hover:shadow-xl hover:transform hover:scale-105 duration-300'
                key={res.id}
              >
                <img
                  src={res.image}
                  alt='stew'
                  className='w-full h-32 sm:h-48 object-cover'
                />
                <div className='m-4'>
                  <span className='font-bold'>{res.title}</span>
                  <span className='block text-gray-500 text-sm'>
                    {res.dishTypes
                      ? res.dishTypes.join(", ")
                      : "No dish types available"}
                  </span>
                </div>
                <div className='badge'>
                  <svg
                    className='w-5 inline-block'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z'
                    />
                  </svg>
                  <span>{res.readyInMinutes} mins</span>
                </div>
              </div>
            </Link>
          ))}
      </div>
      <div className='flex mt-10 justify-center'>
        <button
          className='
                btn
                bg-secondary-100
                text-secondary-200
                hover:shadow-inner
                transform
                hover:scale-125
                hover:bg-opacity-50
                transition
                ease-out
                duration-300
                bg-gray-300	
              '
          onClick={getMore}
        >
          Load more
        </button>
      </div>
    </>
  );
}
