import React, { useState } from "react";
import bannerImg from "../../assets/banner.png";
import Btn from "../UI/Btn";

const Hero = ({ handleSearch }) => {
  const [search, setSearch] = useState("");

  return (
    <div className="py-12">
      <img src={bannerImg} alt="" className="w-full md:max-w-md mx-auto" />
      <div className="space-y-4 text-center">
        <h1 className="text-4xl md:text-7xl font-thin">
          Browse, Search, View, Buy
        </h1>
        <p className="text-gray-500">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste,
          delectus Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Voluptate, recusandae. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Laudantium, repudiandae.
        </p>
        <form
          onSubmit={(e) => {
            handleSearch(e, search)
            setSearch("");
          }}
          className="flex flex-col md:flex-row justify-center items-center my-4"
        >
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            type="text"
            placeholder="Search phone bt name"
            className="bg-white border border-gray-300 rounded sgadow-md w-2/3 h-12 px-4 mb-3 focus:outline-none md:mr-2 md:mb-0"
          />

          <Btn type={'submit'} text={'Search'}></Btn>
        </form>
      </div>
    </div>
  );
};

export default Hero;
