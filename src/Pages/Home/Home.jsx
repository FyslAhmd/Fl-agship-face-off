import React, { useState } from "react";
import Hero from "../../Components/Hero/Hero";
import { useLoaderData } from "react-router";
import PhonesContainer from "../../Components/PhoneContainer/PhonesContainer";

const Home = () => {
  const data = useLoaderData();
  const [phones, setPhones] = useState(data);
  const handleSearch = (e, text) => {
    e.preventDefault();
    if(text=='') {
        return setPhones(data);
    }
    const searchPhones = data.filter(
      (phone) =>
        phone.name.toLowerCase().split(" ").includes(text.toLowerCase()) ||
        phone.brand.toLowerCase().split(" ").includes(text.toLowerCase())
    );
    setPhones(searchPhones);
  };
  return (
    <div>
      <Hero handleSearch={handleSearch}></Hero>
      <PhonesContainer phones={phones}></PhonesContainer>
    </div>
  );
};

export default Home;
