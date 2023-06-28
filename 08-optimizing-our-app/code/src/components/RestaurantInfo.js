import { useEffect, useState } from "react";
import { RESTAURANT_INFO } from "../utilities/links";
import Shimmer from "./Shimmer";
import Accordion from "./Accordion";

const RestaurantInfo = () => {
  const [restaurantInfo, setRestaurantInfo] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(RESTAURANT_INFO);
    const json = await data.json();
    // console.log(json?.data?.cards[0]?.card?.card?.info);
    // console.log(
    //   json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
    //     ?.card?.title
    // );
    setRestaurantInfo(json?.data);
  };

  if (!restaurantInfo) return <Shimmer />;

  const {
    name,
    cuisines,
    areaName,
    avgRating,
    totalRatingsString,
    costForTwoMessage,
  } = restaurantInfo?.cards[0]?.card?.card?.info;

  const { deliveryTime } = restaurantInfo?.cards[0]?.card?.card?.info?.sla;

  //   console.log(restaurantInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR);
  const { title } =
    restaurantInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card;
  const { itemCards } =
    restaurantInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card;

  const menuItems =
    restaurantInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
  console.log(menuItems);

  return (
    <section className="container-info">
      <div className="flex-sbc">
        <div className="res-info-details">
          <h2 className="res-info-name">{name}</h2>
          <p className="res-info-cuisines">{cuisines.join(", ")}</p>
          <p className="res-info-area">{areaName}</p>
        </div>
        <div className="res-info-review">
          <p className="res-info-rating">★ {avgRating}</p>
          <p className="res-info-total-rating">{totalRatingsString}</p>
        </div>
      </div>
      <hr className="hr-dotted" />
      <div className="res-info-delivery-info">
        <p>{deliveryTime} MINS</p>
        <div>•</div>
        <p>{costForTwoMessage}</p>
      </div>
      <div className="veg-only">
        <button className="veg-only-btn">Veg Only</button>
      </div>
      <hr className="hr-dotted" />
      {/* accordion */}
      <div>
        <div className="accordion">
          <Accordion title={title} content={itemCards} />
        </div>
      </div>
      {/* end of accordion */}
    </section>
  );
};
export default RestaurantInfo;
