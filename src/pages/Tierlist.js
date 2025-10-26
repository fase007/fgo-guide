import React from "react";
import "./Tierlist.css";

const Tierlist = () => {
  const tierImages = [
    "/pageimages/tier_list1.png",
    "/pageimages/tier_list2.png",
    "/pageimages/tier_list3.png",
    "/pageimages/tier_list4.png",
    "/pageimages/tier_list5.png",
    "/pageimages/tier_list6.png",
  ];

  return (
    <div className="tierlist-container">
      <h1 className="tierlist-title">FGO Tier List</h1>

      <div className="tierlist-vertical">
        {tierImages.map((image, index) => (
          <div key={index} className="tierlist-item">
            <img src={image} alt={`Tier ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tierlist;