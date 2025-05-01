import React, { useEffect, useState } from "react";
import Phone from "../Phone/Phone";
import Btn from "../UI/Btn";

const PhonesContainer = ({ phones }) => {
  const [displayPhones, setDisplayPhones] = useState([]);
  const [showAll, setShowAll] = useState(false);
  useEffect(() => {
    showAll ? setDisplayPhones(phones) : setDisplayPhones(phones.slice(0, 6));
  }, [phones, showAll]);
  return (
    <div className="py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-4">
        {displayPhones.map((phone) => (
          <Phone key={phone.id} phone={phone}></Phone>
        ))}
      </div>
      <Btn
        onClick={() => setShowAll(!showAll)}
        text={showAll ? "Show Less" : "Show All"}
      ></Btn>
    </div>
  );
};

export default PhonesContainer;
