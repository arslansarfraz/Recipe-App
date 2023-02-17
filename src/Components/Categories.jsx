import React from "react";
import {NavLink, useLocation} from "react-router-dom";
import {Splide, SplideSlide} from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import {
  MdFastfood,
  MdFoodBank,
  MdEmojiFoodBeverage,
  MdOutlineFastfood,
  MdOutlineNoFood,
  MdOutlineEmojiFoodBeverage,
  MdOutlineSearch,
  MdHome,
} from "react-icons/md";

export default function Categories() {
  const linksNav = [
    {name: "african ", icon: MdOutlineEmojiFoodBeverage},
    {name: "asian  ", icon: MdOutlineFastfood},
    {name: "american ", icon: MdFoodBank},
    {name: "chinese ", icon: MdFoodBank},
    {name: "european  ", icon: MdFoodBank},
    {name: "german ", icon: MdOutlineNoFood},
    {name: "japanese", icon: MdFastfood},
    {name: "indian ", icon: MdFastfood},
    {name: "indonesian  ", icon: MdFoodBank},
    {name: "pakistani ", icon: MdEmojiFoodBeverage},
    {name: "oceanic  ", icon: MdEmojiFoodBeverage},
  ];
  const location = useLocation();

  return (
    <div>
      <div className='mt-7 border-b border-gray-200 dark:border-gray-700 bg-white rounded-lg'>
        <Splide
          options={{
            rewind: true,
            gap: "1rem",
          }}
        >
          <ul className='flex lg-flex-wrap sm:flex-initial -mb-px text-sm font-medium text-center w-full text-gray-500 dark:text-gray-400 px-[100px]'>
            {linksNav.map((link, index) => (
              <SplideSlide key={index}>
                <li className='mr-2'>
                  <NavLink
                    className={`inline-flex justify-center items-center p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 capitalize hover:border-gray-300 dark:hover:text-gray-300 group ${
                      location.pathname === `/cuisine/${link.name}`
                        ? "active"
                        : ""
                    }`}
                    to={`/cuisine/${link.name}`}
                  >
                    <link.icon />
                    {link.name}
                  </NavLink>
                </li>
              </SplideSlide>
            ))}
          </ul>
        </Splide>
      </div>
    </div>
  );
}
