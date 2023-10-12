"use client";
import React from "react";

const AddToCart = () => {
  return (
    <div>
      {/*We create a new component just for the button so we can keep most of our code server-sided
      and only 'use client' when we have to, to make the website more secure and SEO friendly. */}
      <button onClick={() => console.log("click")}>Click me</button>
    </div>
  );
};

export default AddToCart;
