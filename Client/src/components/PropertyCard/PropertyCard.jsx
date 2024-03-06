import React from "react";
import "./PropertyCard.css";
// import { AiFillHeart } from "react-icons/ai";
import { truncate } from "lodash";
import { useNavigate } from "react-router-dom";
import Heart from "../Heart/Heart";

const PropertyCard = ({ card }) => {
  const navigate = useNavigate();

  return (
    <div
      className="flexColStart r-card"
      onClick={() => navigate(`../properties/${card.id}`)}
    >
      <Heart id={card?.id} />
      <img src={card.image} alt="home" />
      <span className="secondaryText r-price">
        <span style={{ color: "orange" }}>₹</span>&nbsp;
        <span>{card.price}</span>
      </span>
      <span className="primaryText">
        {truncate(card.title, { length: 15 })}
      </span>{" "}
      {/* card.name to card.title changed */}
      <span className="secondaryText">
        {truncate(card.description, { length: 80 })}
      </span>{" "}
      {/* card. details to card.description */}
    </div>
  );
};

export default PropertyCard;
