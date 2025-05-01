import React from "react";
import { useLoaderData, useParams } from "react-router";
import Btn from "../../Components/UI/Btn";
import { MdShoppingCart, MdBookmarkAdd } from "react-icons/md";
import { addFavourite } from "../../Utils/storage";

const PhoneDetails = () => {
  const { id } = useParams();
  const phoneId = parseInt(id);
  const data = useLoaderData();
  const detailPhone = data.find((phone) => phone.id === phoneId);
  const {
    name,
    image,
    brand,
    model,
    price,
    description,
    storage,
    camera_info,
  } = detailPhone || {};

  const handleFavourites = () => {
    addFavourite(detailPhone);
  }
  return (
    <div className="my-12 w-full">
      <img src={image} alt="" className="w-full md:max-w-md mx-auto" />
      <div className="flex justify-between">
        <h1 className="text-4xl font-bold mb-8">{name}</h1>
        <div className="flex gap-4">
          <Btn text={<MdShoppingCart size={20} />}></Btn>
          <Btn onClick={handleFavourites} text={<MdBookmarkAdd size={20} />}></Btn>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">Brand: {brand}</h2>
        <p className="text-lg mb-4">Model: {model}</p>
        <p className="text-lg mb-4">Price:</p>
        {
          Object.entries(price).map(([key, value]) => (
          <p className="text-lg ml-12 mb-4" key={key}>
            {key} : {value}
          </p>
        ))}
        <p className="text-lg mb-4">Description: {description}</p>
        <p className="text-lg">Storage:</p>
        {
          storage.map((item,index)=> <p key={index} className="text-lg ml-12">{item}</p>)
        }
        <p className="text-lg my-4">Camera Info: {camera_info}</p>
      </div>
    </div>
  );
};

export default PhoneDetails;
