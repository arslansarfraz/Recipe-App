import React from "react";
import Popular from "../Components/Popular";
import Latest from "../Components/Latest";

export default function Home() {
  return (
    <>
      <div className=''>
        <Latest />
        <Popular />
      </div>
    </>
  );
}
