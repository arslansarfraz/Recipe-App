import React, {useState, useEffect} from "react";
import {useParams} from "react-router-dom";

export default function Recipe() {
  const [details, setDetails] = useState([]);
  let pramas = useParams();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.spoonacular.com/recipes/${pramas.id}/information?apiKey=${process.env.REACT_APP_API_KEY}`
        );
        const data = await response.json();
        console.log(data);
        setDetails(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [pramas.id]);

  return (
    <div>
      <section className='text-gray-700 body-font overflow-hidden'>
        <div className='container px-5 py-24 mx-auto'>
          <div className='lg:w-4/5 mx-auto flex flex-wrap'>
            <img
              alt='ecommerce'
              className='lg:w-1/2 w-full object-cover object-center rounded border border-gray-200'
              src={details.image}
            />
            <div className='lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0'>
              <h2 className='text-sm title-font text-gray-500 tracking-widest'>
                {details.sourceName}
              </h2>
              <h1 className='text-gray-900 text-3xl title-font font-medium mb-1'>
                {details.title}
              </h1>
              <p
                className='leading-relaxed'
                dangerouslySetInnerHTML={{__html: details.summary}}
              ></p>
              <h3 className='text-sm pt-5 font-medium title-font text-gray-500 tracking-widest'>
                Instructions
              </h3>
              <p
                className='leading-relaxed pt-2'
                dangerouslySetInnerHTML={{__html: details.instructions}}
              ></p>
            </div>
            <ul>
              {/* {details.extendedIngredients.map(ingredient => {
                // <li>{ingredient.original}</li>;
              })} */}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
