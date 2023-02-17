import React, {useState, useEffect} from "react";
import {useParams, Link} from "react-router-dom";
export default function Cuisine() {
  const [cuisine, setCuisine] = useState([]);
  let pramas = useParams();
  useEffect(() => {
    const fetchData = async name => {
      try {
        const response = await fetch(
          `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${name}`
        );
        const data = await response.json();
        setCuisine(data.results);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData(pramas.type);
  }, [pramas.type]);

  return (
    <>
      <h4 className='font-bold capitalize mt-12 pb-2 border-b border-gray-200'>
        Cuisine {pramas.type}
      </h4>
      <div className='mt-8 grid lg:grid-cols-4 gap-10'>
        {cuisine &&
          cuisine.map(res => (
            <Link to={"/recipe/" + res.id} key={res.id}>
              <div className='card h-80 rounded-xl bg-white shadow-lg hover:shadow-xl hover:transform hover:scale-105 duration-300'>
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
                  <span>
                    {res.readyInMinutes
                      ? res.readyInMinutes
                      : Math.floor(Math.random() * 31) + 20}
                    - mins
                  </span>
                </div>
              </div>
            </Link>
          ))}
      </div>
    </>
  );
}
