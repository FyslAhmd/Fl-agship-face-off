import React, { useEffect, useState } from "react";
import Phone from "../../Components/Phone/Phone";
import { getFavourites, removeFavourite } from "../../Utils/storage";
import NoData from "../../Components/UI/NoData";

const Favourites = () => {
    const [displayPhones, setDisplayPhones] = useState([]);
    useEffect(()=> {
      const favouritesItems = getFavourites();
      setDisplayPhones(favouritesItems);
    },[])
    const handleDelete = id => {
      removeFavourite(id);
      setDisplayPhones(getFavourites());
    }
    if(displayPhones.length < 1) return <NoData></NoData>
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-4">
      {displayPhones.map((phone) => (
        <Phone handleDelete={handleDelete} deletable={true} key={phone.id} phone={phone}></Phone>
      ))}
    </div>
  );
};

export default Favourites;
