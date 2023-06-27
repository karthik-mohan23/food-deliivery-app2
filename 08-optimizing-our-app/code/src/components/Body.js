import { useEffect, useState } from "react";

import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=10.0260688&lng=76.3124753&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    // console.log(json?.data?.cards[2]?.data?.data?.cards[0]?.data);
  }

  if (allRestaurants.length === 0) {
    return <Shimmer />;
  }

  return (
    <section className="container body">
      <div className="flex-sbc filter-contianer">
        <h2 className="no-restaurants">{allRestaurants.length} restaurants</h2>
        <div className="filter-input">
          <input
            type="text"
            placeholder="Restaurant name"
            className="search-input"
          />
          <button className="search-btn">🔍</button>
        </div>
        <button className="rating-filter-btn">Rating</button>
      </div>
      <hr />
      <div className="card-container">
        {allRestaurants.map((restaurant) => {
          return <RestaurantCard key={restaurant.id} {...restaurant} />;
        })}
      </div>
    </section>
  );
};
export default Body;
