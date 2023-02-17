import React, {useState} from "react";
import {MdOutlineSearch} from "react-icons/md";
import {useNavigate} from "react-router-dom";
export default function SearchBox() {
  const [input, setInput] = useState("");
  const navigate = useNavigate();
  const submitHandler = e => {
    e.preventDefault();
    navigate("/searched/" + input);
    setInput("");
  };
  return (
    <div className='relative mt-5'>
      <form onSubmit={submitHandler}>
        <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
          <MdOutlineSearch className='w-5 h-5 text-gray-500 dark:text-gray-400' />
        </div>
        <input
          type='text'
          value={input}
          onChange={e => setInput(e.target.value)}
          id='table-search'
          className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
          placeholder='Search for recipe'
        />
      </form>
    </div>
  );
}
