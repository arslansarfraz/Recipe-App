import React from 'react';
import Page from './Pages/Page';
import './App.css';
import Categories from "./Components/Categories";
import { NavLink } from 'react-router-dom';
import SearchBox from "./Components/SearchBox";
import logo from './assets/logo.png'
import { motion } from "framer-motion";

function App() {
  return (
    <>
      <main className='bg-gray-100 px-16 py-6 md:col-span-2 lg:col-span-3 min-h-screen'>
        <header className='flex'>
          <NavLink to='/'>

            <motion.img src={logo} alt="app-logo" width='100px' whileHover={{
              scale: 1.2,
              transition: { duration: 1 },
            }}
              whileTap={{ scale: 0.9 }} /></NavLink>
        </header>
        <Categories />
        <SearchBox />
        <Page />
      </main>
    </>
  )
}

export default App;
