import React from "react";
import Home from "./Home";
import Cuisine from "./Cuisine";
import {Route, Routes} from "react-router-dom";
import Search from "./Search";
import Recipe from "./Recipe";

export default function Page() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cuisine/:type' element={<Cuisine />} />
        <Route path='/searched/:search' element={<Search />} />
        <Route path='/recipe/:id' element={<Recipe />} />
      </Routes>
    </>
  );
}
